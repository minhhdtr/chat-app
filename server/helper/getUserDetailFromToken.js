import jwt from 'jsonwebtoken';
import UserModel from '../models/UserModel.js';

const getUserDetailFromToken = async (token) => {
  if (!token) {
    return {
      message: 'Session expired',
      logout: true
    };
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const user = await UserModel.findById(decoded.id).select('-password');

  return user;
};

export default getUserDetailFromToken;