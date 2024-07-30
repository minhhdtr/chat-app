import express from 'express';
import registerUser from '../controllers/registerUser.js';
import checkEmail from '../controllers/checkEmail.js';
import checkPassword from '../controllers/checkPassword.js';
import userDetail from '../controllers/userDetail.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/email', checkEmail);
router.post('/password', checkPassword);
router.get('/user-detail', userDetail)

export default router;