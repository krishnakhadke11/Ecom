import express from  'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/products-controller.js';
import { checkout,paymentVerification } from '../controller/payment-controller.js';
import {fetchuser} from '../middleware/fetchuser.js'
import { getCartProducts,addCartProducts,deleteCartProduct } from '../controller/cart-controller.js';

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/getProducts',getProducts);
router.get('/product/:id', getProductById);

router.get('/cart',fetchuser,getCartProducts);
router.post('/addCart',fetchuser,addCartProducts);
router.delete('/deleteCartProd/:id',fetchuser,deleteCartProduct);

router.post('/checkout', checkout);
router.post('/paymentverification', paymentVerification);

export default router;