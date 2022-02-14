const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.redirect('/index');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;