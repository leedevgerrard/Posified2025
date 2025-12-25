import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addTransaction, getAllTransactions, getTodaysTransactions, getTransactionById } from '../controllers/transactionController.js';

const router = express.Router();

router.route('/').get(isVerfiedUser, getAllTransactions).post(isVerfiedUser, addTransaction);
router.route('/byDate').get(isVerfiedUser, getTodaysTransactions);
router.route('/:id').get(isVerfiedUser, getTransactionById);

export default router;