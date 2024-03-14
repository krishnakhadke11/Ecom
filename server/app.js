import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser'
import cors from 'cors';
import Razorpay from "razorpay";

import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';
// UUID


const app = express();
const PORT = 5000;

Connection();
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser())
app.use('/', Routes);

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
  });

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT localhost:${PORT}`)
});