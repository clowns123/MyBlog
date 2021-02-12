import mongoose from "mongoose";
import moment from "moment";

import bcrypt from "bcrypt";

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

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.password = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const res = await bcrypt.compare(password, this.password);
  return res;
};

UserSchema.statics.findByName = function (name) {
  return this.findOne({ name });
};

const User = mongoose.model("user", UserSchema);

export default User;
