import type { Request, Response } from 'express';
import User from '../models/user.ts'
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import dotenv from 'dotenv';

dotenv.config();

const VITE_URL = process.env.VITE_URL;

export const googleCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.user as any;

    if (!user || !user.email) {
      res.status(400).json({ success: false, message: 'Missing Google user info' });
      return;
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );
    // Set JWT as cookie
    res.setHeader('Set-Cookie', cookie.serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    }));

    // Redirect to frontend with name and email in query (optional, for UI)
    res.redirect(`${VITE_URL}/dashboard?email=${user.email}`);
  } catch (err) {
    console.error(err);
    res.redirect(`${VITE_URL}/login?error=google`);
  }
};

export const loginFailed = (req: Request, res: Response) => {
  res.status(401).send('Login failed');
};

export const loginSuccess = (req: Request, res: Response) => {
  res.send('Login successful');
};

export const logout = (req: Request, res: Response): void => {
  req.logout((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ success: false, message: 'Logout failed' });
    }
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.json({ success: true, message: 'Logout successful' });
    });
  });
};

export const checkAuth = (req: Request, res: Response) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
    return;
  } else {
    res.json({ authenticated: false });
    return;
  }
};


export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, repeatPassword } = req.body;
    if (!username || !email || !password || !repeatPassword) {
      res.status(400).json({ success: false, message: 'All fields are required' });
      return;
    }

    if (password !== repeatPassword) {
      res.status(400).json({ success: false, message: 'Passwords do not match' });
      return;
    }

    const existing = await User.findOne({ email });
    if (existing) {
      res.status(400).json({ success: false, message: 'Email already in use' });
      return;
    }

    const hashedPassword = await argon2.hash(password);

    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    
    res.status(201).json({ success: true, message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ success: false, message: 'Invalid email or password' });
      return;
    }

    const isPasswordValid = user.password && await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      res.status(400).json({ success: false, message: 'Invalid email or password' });
      return;
    }

    req.login(user, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Session creation failed' });
        return;
      }

      // Send back the user information (excluding password)
      const userData = {
        name: user.username,
        email: user.email,
      };


      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });

      // Set the JWT token in an HTTP-only cookie
      res.setHeader('Set-Cookie', cookie.serialize('token', token, {
        httpOnly: true, // Can't be accessed by JavaScript
        secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
        maxAge: 60 * 60 * 24, // 1 day
        sameSite: 'lax', // Prevent CSRF attacks
        path: '/', // Cookie accessible on all routes
      }));

      res.json({
        success: true,
        message: 'Login successful',
        user: userData, // Include user info in the response
        sessionToken: token
      });
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};



const authControllers = {
  login, 
  register, 
  googleCallback,
  loginFailed,
  loginSuccess,
  logout,
  checkAuth
}

export default authControllers;
