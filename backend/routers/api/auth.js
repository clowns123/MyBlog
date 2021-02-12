import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../../config";
import auth from "../../middleware/auth";
import User from "../../models/user";

const { JWT_SECRET } = config;
const router = express.Router();

/**
@router     POST api/auth
@desc       Auth user
@access     public
*/
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  // 유효성 검사
  if (!email || !password) {
    return res.status(400).json({ msg: "모든 필드를 채워주세요" });
  }
  const checkUser = await User.findOne({ email });
  if (!checkUser) {
    return res.status(400).json({ msg: "유저가 존재하지 않습니다." });
  }
  const checkPass = bcrypt.compareSync(password, checkUser.password);
  if (!checkPass) {
    return res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
  }

  // 토큰 발행
  const token = jwt.sign(
    // 1. 토큰 안에 넣고 싶은 데이터
    { id: User.id },
    // 2. JWT 암호
    JWT_SECRET,
    // 3. 속성
    { expiresIn: "2d" }
  );
  res.json({
    token,
    user: {
      id: checkUser.id,
      name: checkUser.name,
      email: checkUser.email,
      role: checkUser.role, // user models에 role의 enum 체크
    },
  });
});

router.post("/logout", (req, res) => {
  res.json("로그아웃 성공");
});

router.get("/user", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password"); // pass 제거하고 검색

    if (!user) throw Error("유저가 존재하지 않습니다.");

    res.json(user);
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e.message });
  }
});
export default router;
