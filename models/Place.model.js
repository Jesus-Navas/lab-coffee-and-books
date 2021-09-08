const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeSchema = new Schema(
  {
    placename: {
      type: String,
      unique: true,
    },
    type: {
      type: String,
      enum: ["coffeShop", "bookStore"],
    },
    location: {
      type: {
        type: String,
      },
      coordinates: [Number],
    },
  },
  {
    timestamps: true,
  }
);

placeSchema.index({ location: "2dsphere" });
const Place = mongoose.model("Place", placeSchema);

module.exports = Place;
