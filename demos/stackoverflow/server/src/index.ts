import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.ts';
import questionRoutes from './routes/question.routes.ts';
import userRoutes from './routes/user.routes.ts';
import answerRoutes from './routes/answer.routes.ts';
import './config/passport.ts';
import './config/connection.ts';

dotenv.config({
    path: "./.env"
})

async function start() {

    const app = express();

    app.use(cors({
        origin: process.env.VITE_URL, 
        credentials: true,
    }));
    
    app.use(express.json());
    app.use(cookieParser());
    app.use(session({
        secret: process.env.SESSION_SECRET!,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true, // Prevent JS access
            secure: false, // Set to true in production with HTTPS
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            sameSite: 'lax',
          },
      }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/auth', authRoutes);
    app.use('/questions', questionRoutes);
    app.use('/users', userRoutes);
    app.use('/answers', answerRoutes);
    

    app.get('/', (req, res) => {
        res.send("Hello World");
    })

    app.listen(process.env.HTTP_PORT, () => {
        console.log('Server is running on port ' + process.env.HTTP_PORT);
    })
}

start();