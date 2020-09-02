var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

// link https://codesquery.com/github-login-implementation-in-node-js-using-passport-js/

