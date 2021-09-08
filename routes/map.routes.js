const router = require("express").Router();

router.get("/basico", (req, res, next) => res.render("/"));

module.exports = router;
