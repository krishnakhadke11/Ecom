import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import Connection from './database/db.js';
import DefaultData from './default.js';
import Routes from './routes/route.js';
import { v4 as uuid } from 'uuid';
const app = express();
const PORT = 5000;

Connection();
DefaultData();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:5000/callback'
paytmParams['EMAIL'] = 'riskmprt13@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'

app.listen(PORT, () => {
    console.log(`Server is running successfully on PORT localhost:${PORT}`)
});