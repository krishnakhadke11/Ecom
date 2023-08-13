import express from  'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/products-controller.js';
import {addPaymentGateway,paymentResponse} from '../controller/payment-controller.js'
const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/getProducts',getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;