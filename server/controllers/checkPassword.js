import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; 
import UserModel from '../models/UserModel.js';

const checkPassword = async (req, res) => {
  try {
    const { password, userID } = req.body;

    const user = await UserModel.findById(userID);

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: 'Invalid password',
        error: true
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const token = await jwt.sign(tokenData , process.env.JWT_SECRET_KEY, { expiresIn: '1h' });

    const cookieOptions = {
      http: true,
      secure: true
    };

    return res.cookie('token', token, cookieOptions ).status(200).json({
      message: 'Login successfully',
      success: true,
      token: token
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export default checkPassword;