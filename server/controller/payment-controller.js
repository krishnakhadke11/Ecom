/*
import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../app.js';
import formidable from 'formidable';
import qs from 'query-string'
import https from 'https';



export const addPaymentGateway = async (request, response) => {
    paytmParams['TXN_AMOUNT'] = request.body.amount.toString();
    // console.log(paytmParams)
   
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
        const params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        console.log(params)
        response.json(params);
    } catch (error) {
        console.log(error);
    }
}

export const paymentResponse = (request, response) => {
    let body=''
    request.on('data',(data)=>{
        console.log(data)
        body+=data;
    })
    // let post_data;
    request.on('end',()=>{
        let post_data = qs.parse(body);
    
    const paytmCheckSum = post_data.CHECKSUMHASH;
    // delete request.body.CHECKSUMHASH;

    const isVerifySignature = paytmchecksum.verifySignature(post_data, paytmMerchantkey, paytmCheckSum);
    if (isVerifySignature) {
        let paytmParams = {};
        paytmParams["MID"] = request.body.MID;
        paytmParams["ORDERID"] = request.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, paytmMerchantkey).then(function (checksum) {

            paytmParams["CHECKSUMHASH"] = checksum;

            const post_data = JSON.stringify(paytmParams);

            const options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            let res = "";
            const post_req = https.request(options, function (post_res) {
                post_res.on('data', function (chunk) {
                    console.log("Chunk Data : ",chunk);
                    res += chunk;
                });

                post_res.on('end', function () {
                    let result = JSON.parse(res);
                    console.log(result);
                    response.redirect(`http://localhost:3000/`)
                });
            });
            //post_data is sent as body through http request using post_req.write();
            post_req.write(post_data);
            post_req.end();
        });
    } else {
        console.log("Checksum Mismatched");
    }
})
}
*/

import { instance } from "../app.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
    const options = {
        amount: Number(req.body.amount * 100),
        currency: "INR",
    };
    const order = await instance.orders.create(options);

    res.status(200).json({
        success: true,
        order,
    });
};

export const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
        req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
        .update(body.toString())
        .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        // Database comes here

        res.redirect(
            //   `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
            `http://localhost:3000/`
        );
    } else {
        // Take some actions on the account holder if the authenticity fails
        res.status(400).json({
            success: false,
        });
    }
};
