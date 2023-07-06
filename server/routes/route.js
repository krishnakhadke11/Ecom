import express from  'express';
import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getProducts } from '../controller/products-controller.js';
const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogIn);

router.get('/getProducts',getProducts);

export default router;