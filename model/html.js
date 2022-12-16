const mongoose = require("mongoose");
const HtmlSchema = mongoose.Schema(
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

const HTML = mongoose.model("html", HtmlSchema);

module.exports = HTML;
