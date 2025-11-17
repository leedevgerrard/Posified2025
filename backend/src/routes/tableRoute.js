import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addTable, getAllTables, updateTable } from '../controllers/tableController.js';
const router = express.Router();

router.route('/').get(isVerfiedUser, getAllTables).post(isVerfiedUser, addTable);
router.route('/:id').put(isVerfiedUser, updateTable);

export default router;