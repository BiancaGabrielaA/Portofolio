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
      // Respond with success instead of redirecting directly
      res.json({ success: true, message: 'Logout successful' });
    });
  });
};

export const checkAuth = (req: Request, res: Response): void => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    res.json({ authenticated: true, user: req.user });
  } else {
    res.json({ authenticated: false, user: null });
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

const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const email = req.body.email;
    const password =  req.body.password;

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    // Password is valid, you can proceed (e.g., create token or session)
    console.log('works');
    res.json({ success: true, message: 'Login successful' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
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
