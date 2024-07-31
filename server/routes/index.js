import express from 'express';
import registerUser from '../controllers/registerUser.js';
import checkEmail from '../controllers/checkEmail.js';
import checkPassword from '../controllers/checkPassword.js';
import userDetail from '../controllers/userDetail.js';
import logout from '../controllers/logout.js';
import updateUserDetail from '../controllers/updateUserDetail.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/email', checkEmail);
router.post('/password', checkPassword);
router.get('/user-detail', userDetail);
router.get('/logout', logout);
router.post('/update-user', updateUserDetail);

export default router;