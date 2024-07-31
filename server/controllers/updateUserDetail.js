import getUserDetailFromToken from '../helper/getUserDetailFromToken.js';
import UserModel from '../models/UserModel.js';

const updateUserDetail = async (req, res) => {
  try {
    const token = req.cookies.token || '';

    const user = await getUserDetailFromToken(token);

    const { name, profile_pic } = req.body;

    const updatedUser = await UserModel.updateOne({
      _id: user.id
    }, {
      name,
      profile_pic
    });

    const userInfo = await UserModel.findById(user._id);

    return res.status(200).json({
      message: 'User updated successfully',
      success: true,
      data: userInfo
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export default updateUserDetail;