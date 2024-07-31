const logout = async (req, res) => {
  try {
    const cookieOptions = {
      http: true,
      secure: true
    };

    return res.cookie('token', '', cookieOptions ).status(200).json({
      message: 'Session cleared',
      success: true
    });
  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
};

export default logout;