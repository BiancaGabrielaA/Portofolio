import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import authRoutes from './routes/auth.routes.ts';
import './config/passport.ts';

async function start() {

    dotenv.config({
        path: "./.env"
    })

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(session({
        secret: process.env.SESSION_SECRET!,
        resave: false,
        saveUninitialized: false,
      }));

    app.use(passport.initialize());
    app.use(passport.session());
    app.use('/auth', authRoutes);

    app.get('/', (req, res) => {
        res.send("Hello World");
    })

    app.listen(process.env.HTTP_PORT, () => {
        console.log('Server is running on port ' + process.env.HTTP_PORT);
    })
}

start();