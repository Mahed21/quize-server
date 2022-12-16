const Bootsrap = require("../model/bootstap");
exports.getBootstrap = async (req, res) => {
  try {
    const queries = {};
    //console.log(req.query.page);
    if (req.query.page) {
      const skip = (req.query.page - 1) * parseInt(1);
      queries.skip = skip;
    }
    const bootstap = await Bootsrap.find({}).skip(queries.skip).limit(1);

    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: bootstap,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createBootstrap = async (req, res, next) => {
  try {
    const bootstap = new Bootsrap(req.body);
    const result = await bootstap.save();
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
