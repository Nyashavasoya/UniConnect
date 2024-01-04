const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const { name, email, password, Institute } = req.body;
    console.log(name, email); // safsdaf
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .send({ success: false, message: "User already exists" });
    }
    console.log("new user");
    user = await User.create({
      name,
      email,
      password,
      Institute,
    });
    console.log("user created", user);

    const registerToken = await user.generateToken(); // Fix: Use user instance here
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.status(201).cookie("registerToken", registerToken, options).json({
      success: true,
      user,
      registerToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { name, password } = req.body;

    const user = await User.findOne({ name }).select("+password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isMatch = await user.matchPassword(password); // Fix: Use user instance here

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password!",
      });
    }

    const loginToken = await user.generateToken(); // Fix: Use user instance here
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 90 * 24 * 60 * 60 * 1000,
    };
    res.status(200).cookie("loginToken", loginToken, options).json({
      success: true,
      user,
      loginToken,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res
      .status(201)
      .cookie("logoutToken", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      })
      .json({
        success: true,
        message: "Logged out!",
      });
  } catch (error) {}
};
