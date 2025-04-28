import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(`mongodb+srv://biancagabrielaasavoaei:${process.env.MONGO_PASSWORD}@cluster0.on8mpma.mongodb.net/`)
