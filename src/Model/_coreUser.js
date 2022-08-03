const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const baseOption = {
  discriminatorKey: "user",
  collection: "user",
  timestamps: true,
};

const BaseUserSchema = new Schema(
  {
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
  },
  baseOption
);

module.exports.BaseUserSchema = mongoose.model(
  "BaseUserSchema",
  BaseUserSchema
);

("If this article was helpful to you, Kindly like, comment and follow me on Linkedin and Medium to see more of my article. Click on the following link to access the source code.");
("Feel free to drop any suggestions/comments. if you have a topic based on the Javascript/React.js ecosystem, kindly reach out and I’d be glad to write on it. Thanks.");
