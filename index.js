const mongoose = require("mongoose");
const { app } = require("./app");
require("dotenv").config();

// //setting the mongoose options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_LOCAL_URL;
mongoose
  .connect(MONGODB_URI, options)
  .then(() => {
    console.warn("connected successfully");
  })
  .catch((err) => {
    throw "error occured : " + err;
  });

app.listen(PORT, () => {
  console.log(`server ready on http://localhost:${PORT}`);
});
