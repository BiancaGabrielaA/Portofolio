import type { Request, Response } from 'express';
import User from '../models/user.ts'
import { format } from 'date-fns';

export const googleCallback = (req: Request, res: Response) => {
  res.redirect('http://localhost:5173/dashboard');
};

export const loginSuccess = (req: Request, res: Response) => {
  res.send('Login successful');
};

export const loginFailed = (req: Request, res: Response) => {
  res.status(401).send('Login failed');
};

export const logout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) return res.status(500).send('Logout error');
    res.redirect('/');
  });
};

export const checkAuth = (req: Request, res: Response) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: 'Not authenticated' });
  }
};

export const register = async (req: Request, res: Response) => {
   const user = new User ({
      username: 'biancaA',
      email: 'biancatest@gmail.com',
      password: '123456',
   })

   await user.save();
   res.json({ success: true });
}
export const login = () => {

}