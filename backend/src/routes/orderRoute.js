import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addOrder, getAllOrders, getOrderById, updateOrder, updateOrderStatus } from '../controllers/orderController.js';
const router = express.Router();

router.route('/').get(isVerfiedUser, getAllOrders).post(isVerfiedUser, addOrder);
router.route('/:id').get(isVerfiedUser, getOrderById).put(isVerfiedUser, updateOrder).patch(isVerfiedUser, updateOrderStatus);

export default router;