const router = require("express").Router();

const Place = require("../models/Place.model");

router.get("/", (req, res) => {
  Place.find()
    .then((places) => {
      res.render("index", { places });
    })
    .catch((err) => console.log(err));
});

router.post("/create", (req, res) => {
  const { placename, type, lat, lng } = req.body;

  const location = {
    type: "Point",
    coordinates: [lat, lng],
  };

  Place.create({ placename, type, location })
    .then((thePlace) => {
      res.redirect("./../");
    })
    .catch((err) => console.log(err));
});

router.get("/edit", (req, res) => {
  Place.find()
    .then((places) => {
      res.render("edit", { places });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
