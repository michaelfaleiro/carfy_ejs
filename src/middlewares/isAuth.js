const isAuth = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  } else {
    res.redirect("/");
  }
};

const isAuthLogin = (req, res, next) => {
  if (req.session.isAuth) {
    res.redirect("/dashboard");
    next();
  }
  next();
};

module.exports = {
  isAuth,
  isAuthLogin,
};
