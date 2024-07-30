import getUserDetailFromToken from '../helper/getUserDetailFromToken.js';

const userDetail = async (req, res) => {
  try {
    const token = req.cookies.token || '';

    const user = await getUserDetailFromToken(token);

    return res.status(200).json({
      message: 'User detail',
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

export default userDetail;