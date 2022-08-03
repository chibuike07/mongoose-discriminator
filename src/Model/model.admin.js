const mongoose = require("mongoose");
const { BaseUserSchema } = require("./_coreUser");
const Schema = mongoose.Schema;

const role = Object.freeze(["HR-ADMIN", "TECHNOLOGY-ADMIN"]);
const leavePeriod = Object.freeze(["Jan", "Feb", "Mar", "Apr", "May", "Jun"]);

const Admin = new Schema({
  role: {
    type: String,
    trim: true,
    enum: role,
    required: true,
    default: "HR-ADMIN",
  },
  leavePeriod: {
    type: String,
    trim: true,
    enum: leavePeriod,
    required: true,
    default: "HR-ADMIN",
  },
});

const AdminSignUp = BaseUserSchema.discriminator("admin", Admin);

module.exports = { AdminSignUp };
