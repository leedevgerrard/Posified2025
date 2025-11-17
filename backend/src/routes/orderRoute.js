import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addOrder, getAllOrders, getOrderById } from '../controllers/orderController.js';

router = express.Router();

router.route('/').get(isVerfiedUser, getAllOrders).post(isVerfiedUser, addOrder);
router.route('/:id').get(isVerfiedUser, getOrderById);

export default router;