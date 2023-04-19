import mongoose from "mongoose";

const { Schema } = mongoose;

const users = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  repassword: {
    type: String,
    require: true,
  },
});

export default mongoose.model("users", users);
