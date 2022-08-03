const { AdminSignUp } = require("../Model/model.admin");
const { UserSignUp } = require("../Model/model.user");

exports.createUser = async (req, res) => {
  try {
    const User = req?.body && (await UserSignUp.create(req.body));
    return res.status(200).json({ User });
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};

exports.createAdmin = async (req, res) => {
  try {
    const Admin = req?.body && (await AdminSignUp.create(req.body));
    return res.status(200).json({ Admin });
  } catch (error) {
    return res.status(500).json({ Error: error.message });
  }
};
