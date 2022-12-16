const Css = require("../model/css");
exports.getCss = async (req, res) => {
  try {
    const queries = {};
    //console.log(req.query.page);
    if (req.query.page) {
      const skip = (req.query.page - 1) * parseInt(1);
      queries.skip = skip;
    }
    const css = await Css.find({}).skip(queries.skip).limit(1);

    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: css,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createCss = async (req, res, next) => {
  try {
    const css = new Css(req.body);
    const result = await css.save();
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
