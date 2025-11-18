import express from 'express';
import { isVerfiedUser } from '../middleware/tokenVerification.js';
import { isAdmin } from '../middleware/adminVerification.js';
const router = express.Router();

router.route('/').get(isVerfiedUser).post(isVerfiedUser, isAdmin);
router.route('/:id').get(isVerfiedUser).delete(isVerfiedUser, isAdmin);

export default router;