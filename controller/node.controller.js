const Node = require("../model/nodejs");
exports.getNode = async (req, res) => {
  try {
    const queries = {};
    //console.log(req.query.page);
    if (req.query.page) {
      const skip = (req.query.page - 1) * parseInt(1);
      queries.skip = skip;
    }
    const node = await Node.find({}).skip(queries.skip).limit(1);

    res.status(200).json({
      status: "success",
      message: "data get Successfully",
      data: node,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "data fail to get",
      data: error.message,
    });
  }
};

exports.createNode = async (req, res, next) => {
  try {
    const node = new Node(req.body);
    const result = await node.save();
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
