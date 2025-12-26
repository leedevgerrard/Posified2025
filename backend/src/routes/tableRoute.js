import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { addTable, deleteTable, getAllTables, updateTable } from '../controllers/tableController.js';
import { isAdmin } from '../middleware/adminVerification.js';
const router = express.Router();

router.route('/').get(isVerfiedUser, getAllTables).post(isVerfiedUser, addTable);
router.route('/:id').put(isVerfiedUser, updateTable);
router.route('/:tableNum/delete').delete(isVerfiedUser, isAdmin, deleteTable);

export default router;