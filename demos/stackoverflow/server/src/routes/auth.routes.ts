import { Router } from 'express';
import passport from 'passport';
import authControllers from '../controllers/auth.controller.ts';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], session: true }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: `auth/login`, session: true }),
  authControllers.googleCallback
);

router.get('/success', authControllers.loginSuccess);
router.get('/failed', authControllers.loginFailed);
router.get('/logout', authControllers.logout);

router.get('/check-auth', authControllers.checkAuth);
router.post('/register', authControllers.register);
router.post('/login', authControllers.login);


export default router;
