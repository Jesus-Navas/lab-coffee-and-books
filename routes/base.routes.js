const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  //res.send("hola index");
  res.render("index");
});

module.exports = router;
