import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  avataUrl: String,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  socialOnly: { type: Boolean, default: false },
  password: { type: String },
  location: String,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;
