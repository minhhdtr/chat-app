import UserModel from '../models/UserModel.js';

const checkEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const checkEmail = await UserModel.findOne({ email }).select('-password');

    if (!checkEmail) {
      return res.status(400).json({
        message: 'Email not found',
        error: true
      });
    }

    return res.status(200).json({
      message: 'Email verified',
      success: true,
      data: checkEmail
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export default checkEmail;