import { Router } from 'express';
import passport from 'passport';
import { loginFailed, loginSuccess, logout } from '../controllers/auth.controller.ts';

const router = Router();

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/failed' }),
  (req, res) => {
    res.redirect('/auth/success');
  }
);

router.get('/success', loginSuccess);
router.get('/failed', loginFailed);
router.get('/logout', logout);

export default router;
