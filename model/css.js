const mongoose = require("mongoose");
const CssSchema = mongoose.Schema(
  {
    question: {
      type: String,
      trim: true,
    },
    optionOne: {
      type: String,
      trim: true,
    },

    optionTwo: {
      type: String,
      trim: true,
    },
    optionThree: {
      type: String,
      trim: true,
    },
    optionFour: {
      type: String,
      trim: true,
    },
    answer: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Css = mongoose.model("css", CssSchema);

module.exports = Css;
