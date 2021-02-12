import express from "express";
import bcrypt from "bcryptjs";
import auth from "../../middleware/auth";
import User from "../../models/user";

const router = express.Router();

/**
@router     POST api/auth
@desc       Auth user
@access     public
*/
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  // 유효성 검사
  if (!email || !password) {
    return res.status(400).json({ msg: "모든 필드를 채워주세요" });
  }

  try {
    if (!user) {
      return res.status(400).json({ msg: "유저가 존재하지 않습니다." });
    }
    const checkPass = bcrypt.compareSync(password, user.password);
    if (!checkPass) {
      return res.status(400).json({ msg: "비밀번호가 일치하지 않습니다." });
    }
    const token = user.getToken();
    res.cookie("token", token, {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
      httpOnly: true,
    });
    res.json(user.serialize());
  } catch (e) {
    return res.status(500).json({ msg: "로그인 도중 에러" });
  }
});

router.post("/logout", auth, (req, res) => {
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
