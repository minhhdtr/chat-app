import UserModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';

const registerUser = async (req, res) => {
  try {
    const { name, email, password, profile_pic } = req.body;

    // Check if the email already exists
    const checkEmail = await UserModel.findOne({ email });

    if (checkEmail) {
      return res.status(400).json({
        message: 'Email already exists',
        error: true,
      });
    }

    // Hash the password
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
      error: false,
      data: userSave,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export default registerUser;