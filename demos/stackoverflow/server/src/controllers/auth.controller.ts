import type { Request, Response } from 'express';

export const googleCallback = (req: Request, res: Response) => {
  res.redirect('/auth/success');
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
