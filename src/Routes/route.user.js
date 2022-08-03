const { createUser, createAdmin } = require("../Controller/controller.users");
const UserRouter = require("express").Router();

UserRouter.post("/create-user", createUser);
UserRouter.post("/create-admin", createAdmin);

module.exports = { UserRouter };
