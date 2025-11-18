import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { isAdmin } from '../middleware/adminVerification.js';
import { addProduct, deleteProduct, getAllProducts, getProductById } from '../controllers/productController.js';
const router = express.Router();

router.route('/').get(isVerfiedUser, getAllProducts).post(isVerfiedUser, isAdmin, addProduct);
router.route('/:id').get(isVerfiedUser, getProductById).delete(isVerfiedUser, isAdmin, deleteProduct);

export default router;