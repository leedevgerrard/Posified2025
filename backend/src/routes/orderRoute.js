import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addOrder, cancelOrder, getAllOrders, getOrderById, updateOrder, updateOrderStatus } from '../controllers/orderController.js';
import { requireManagerPin } from '../middleware/managerPinVerification.js';
const router = express.Router();

router.route('/').get(isVerfiedUser, getAllOrders).post(isVerfiedUser, addOrder);
router.route('/:id').get(isVerfiedUser, getOrderById).put(isVerfiedUser, updateOrder).patch(isVerfiedUser, updateOrderStatus);
router.route('/:id/cancel').patch(isVerfiedUser, requireManagerPin, cancelOrder);

export default router;