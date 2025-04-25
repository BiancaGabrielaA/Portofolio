import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

async function start() {

    dotenv.config({
        path: "./.env"
    })

    const app = express();

    app.use(cors());
    app.use(express.json());

    app.get('/', (req, res) => {
        res.send("Hello World");
    })

    app.listen(process.env.HTTP_PORT, () => {
        console.log('Server is running on port ' + process.env.HTTP_PORT);
    })
}

start();