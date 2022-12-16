const mongoose = require("mongoose");
const NodeSchema = mongoose.Schema(
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

const Node = mongoose.model("node", NodeSchema);

module.exports = Node;
