import mongoose from "mongoose";
import moment from "moment";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import config from "../config";
const { JWT_SECRET } = config;

// Create Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["MainJuin", "SubJuin", "User"],
    default: "User",
  },
  register_date: {
    type: Date,
    default: moment().format("YYYY-MM-DD hh:mm:ss"),
  },
  comments: [
    {
      post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
      },
      comment_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comments",
      },
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
});

// 데이터베이스에 password 저장
UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.password = hash;
};

// 암호화된 pass와 들어온 pass를 비교
UserSchema.methods.checkPassword = async function (password) {
  const res = await bcrypt.compare(password, this.password);
  return res;
};

// json으로 바꿀 떄 비밀번호를 제거
UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.password;
  return data;
};

// jwt 토큰 발행
UserSchema.methods.getToken = function () {
  const token = jwt.sign(
    // 토크에 넣는 데이터
    { id: this.id, name: this.name },
    // 2. JWT 암호
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  return token;
};

// 이미 저장된 이메일이 있는지 확인
UserSchema.statics.findByEmail = function (email) {
  return this.findOne({ email });
};

// 이미 저장된 이름이 있는지 확인
UserSchema.statics.findByName = function (name) {
  return this.findOne({ name });
};

const User = mongoose.model("user", UserSchema);

export default User;
