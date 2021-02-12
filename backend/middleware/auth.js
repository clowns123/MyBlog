import jwt, { decode } from "jsonwebtoken";
import config from "../config/index";
const { JWT_SECRET } = config;

const auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ mas: "토큰이 없습니다." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = { id: decoded.id, name: decoded.name };
    // 유효기간이 지났으면 재발급
    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp - now < 60 * 60 * 24 * 3.5) {
      const user = await User.findByName(decoded.name);
      const token = user.getToken();
      res.cookie("token", token, {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
        httpOnly: true,
      });
    }
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: "토큰이 유효하지 않습니다." });
  }
};

export default auth;
