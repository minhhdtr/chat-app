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
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export default userDetail;