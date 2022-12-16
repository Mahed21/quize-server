const React = require("../model/react");
exports.getReact = async (req, res) => {
  try {
    const queries = {};
    //console.log(req.query.page);
    if (req.query.page) {
      const skip = (req.query.page - 1) * parseInt(1);
      queries.skip = skip;
    }
    const react = await React.find({}).skip(queries.skip).limit(1);

    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: react,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createReact = async (req, res, next) => {
  try {
    const react = new React(req.body);
    const result = await react.save();
    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};
