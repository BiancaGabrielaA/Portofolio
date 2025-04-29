import type { Request, Response } from 'express';
import User from '../models/user.ts'
import argon2 from 'argon2';

export const googleCallback = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = req.user as { email: string; name: string };

    if (!user?.email) {
      res.status(400).json({ success: false, message: 'No Google user info found' });
      return;
    }

    let existing = await User.findOne({ email: user.email });

    if (!existing) {
      // Create a new user if one doesn't exist
      existing = await new User({
        username: user.name,
        email: user.email,
        password: '',  // No password for Google login users
      }).save();
    }

    req.session.userId = existing._id.toString();
    res.redirect('http://localhost:5173/dashboard');
  } catch (err) {
    console.error(err);
    res.redirect('http://localhost:5173/login?error=google');
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
    return res.json({ authenticated: true, user: req.user });
  } else {
    return res.json({ authenticated: false });
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

    // Hash password with argon2
    const hashedPassword = await argon2.hash(password);

    // Save user with hashed password
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

    const isPasswordValid = await argon2.verify(user.password, password);
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

      res.json({ success: true, message: 'Login successful' });
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
