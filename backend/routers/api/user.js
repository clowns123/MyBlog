import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../models/user";
import config from "../../config";
import auth from "../../middleware/auth";

const router = express.Router();
const { JWT_SECRET } = config;

/**
@router     GET api/user
@desc       Get all user
@access     public
*/
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) throw Error("No Users");
    res.status(200).json(users);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});

/**
@router     POST /api/user
@desc       Register user
@access     public
*/
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ msg: "모든 필드를 채워주세요" });
  }

  const userCheck = await User.findOne({ email });
  if (userCheck) {
    return res.status(400).json({ msg: "이미 가입된 유저가 존재합니다." });
  }

  const user = new User({
    name,
    email,
    password,
  });

  try {
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(user.password, salt);
    user.password = passHash;
    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: 3600,
    });
    const checkUser = await user.save();
    res.json({
      token,
      user: { id: checkUser.id, name: checkUser.name, email: checkUser.email },
    });
  } catch (e) {
    return res.status(400).json({ msg: "가입 도중 문제가 생겼습니다." });
  }
});

export default router;
