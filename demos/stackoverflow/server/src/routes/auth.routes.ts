import { Router } from 'express';
import passport from 'passport';
import { googleCallback, checkAuth, loginFailed, loginSuccess, logout } from '../controllers/auth.controller.ts';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failed' }),
  googleCallback
);

router.get('/success', loginSuccess);
router.get('/failed', loginFailed);
router.get('/logout', logout);

router.get('/check-auth', checkAuth)

export default router;
