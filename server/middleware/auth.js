import jwt from "jsonwebtoken";
import config from "../config/index";
const { JWT_SECRET } = config;

const auth = (req, res, next) => {
  const token = req.headers.authorization.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ mas: "토큰이 없습니다." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: "토큰이 유효하지 않습니다." });
  }
};

export default auth;
