import express from  'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/products-controller.js';
const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/getProducts',getProducts);
router.get('/product/:id', getProductById);

export default router;