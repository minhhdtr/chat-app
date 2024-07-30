import express from 'express';
import registerUser from '../controllers/registerUser.js';
import checkEmail from '../controllers/checkEmail.js'; 

const router = express.Router();

router.post('/register', registerUser);
router.post('/email', checkEmail);

export default router;