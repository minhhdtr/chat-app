import UserModel from '../models/UserModel.js';

const checkEmail = async (req, res) => {
  try {
    const {
      email
    } = req.body;

    const checkEmail = await UserModel.findOne({
      email
    }).select('-password');

    if (!checkEmail) {
      return res.status(400).json({
        message: 'Email not found',
        error: true
      });
    }

    return res.status(200).json({
      message: 'Email verified',
      success: true,
      error: false,
      data: checkEmail
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

export default checkEmail;