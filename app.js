const express = require("express");
const cors = require("cors");
const { UserRouter } = require("./src/Routes/route.user");
require("dotenv").config();
const app = express();

const { DEPLOYEDPATH, ORIGINPATH } = process.env;
app.use(
  cors({
    origin: [`${process.env.FRONT_URL}`, DEPLOYEDPATH, , ORIGINPATH],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/", UserRouter);

module.exports = { app };
