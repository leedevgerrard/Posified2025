import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addOrder, getAllOrders, getOrderById, updateOrder } from '../controllers/orderController.js';
const router = express.Router();

router.route('/').get(isVerfiedUser, getAllOrders).post(isVerfiedUser, addOrder);
router.route('/:id').get(isVerfiedUser, getOrderById).put(isVerfiedUser, updateOrder);

export default router;