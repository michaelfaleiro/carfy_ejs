const UserModel = require("../models/User");
const bcrypt = require("bcrypt");

let message = "";
let type = "";

const home = async (req, res) => {
  return res.render("login", {
    message,
    type,
    user: "",
    layout: false,
  });
};

const createUser = async (req, res) => {
  try {
    const { name, lastname, email, password } = req.body;

    let user = await UserModel.findOne({ email });

    if (user) {
      return res.json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    user = await UserModel.create({
      name,
      lastname,
      email,
      password: passwordHash,
    });

    return res.redirect("/");
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) {
      return res.redirect("/");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.redirect("/");
    }

    req.session.isAuth = true;
    req.session.user = user;

    return res.redirect("/dashboard");
  } catch (error) {
    return res.json({ message: error.message });
  }
};

const createpage = async (req, res) => {
  return res.render("createuser");
};

const dashboard = async (req, res) => {
  const name = req.session.user.name;
  return res.render("dashboard", {
    user: name,
    message,
    type,
  });
};

const logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
  });
};

module.exports = {
  home,
  createUser,
  login,
  createpage,
  dashboard,
  logout,
};
