import express from 'express';
import { login, register, getUser } from '../controllers/userController.js';
import { isVerfiedUser } from './../middleware/tokenVerification.js';
router = express.Router();

router.route('/').get(isVerfiedUser, getUser);
// router.route('/:id')
router.route('/register').post(register);
router.route('/login').post(login);

export default router;