const mongoose = require("mongoose");
const { BaseUserSchema } = require("./_coreUser");
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, trim: true, required: true },
  phoneNumber: { type: String, trim: true, required: true },
});

const UserSignUp = BaseUserSchema.discriminator("users", User);

module.exports = { UserSignUp };
