import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const tokenDecode = jwt.decode(token);

    if (!req.body) req.body = {};
    req.body.clerkId = tokenDecode.clerkId || tokenDecode.sub;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
