import UserModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';

const registerUser = async (req, res) => {
  try {
    const { name, email, password, profile_pic } = req.body;

    const checkEmail = await UserModel.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({
        message: 'Email already exists',
        error: true,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const payload = {
      name,
      email,
      password: hashedPassword,
      profile_pic,
    };

    const user = new UserModel(payload);
    const userSave = await user.save();

    return res.status(201).json({
      message: 'User registered successfully',
      success: true,
      data: userSave,
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
}

export default registerUser;