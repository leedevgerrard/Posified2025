import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addTransaction, getAllTransactions, getTransactionById } from '../controllers/transactionController.js';

const router = express.Router();

router.route('/').get(isVerfiedUser, getAllTransactions).post(isVerfiedUser, addTransaction);
router.route('/:id').get(isVerfiedUser, getTransactionById)

export default router;