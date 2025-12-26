import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { isAdmin } from '../middleware/adminVerification.js';
import { addCategory, deleteCategory, getAllCategories } from '../controllers/categoryController.js';
const router = express.Router();

router.route('/').get(isVerfiedUser, getAllCategories).post(isVerfiedUser, isAdmin, addCategory);
router.route('/:categorySlug/delete').delete(isVerfiedUser, isAdmin, deleteCategory);

export default router;