const HTML = require("../model/html");
exports.getHtml = async (req, res) => {
  try {
    const queries = {};
    //console.log(req.query.page);
    if (req.query.page) {
      const skip = (req.query.page - 1) * parseInt(1);
      queries.skip = skip;
    }
    const html = await HTML.find({}).skip(queries.skip).limit(1);

    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: html,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createHtml = async (req, res, next) => {
  try {
    const html = new HTML(req.body);
    const result = await html.save();
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
