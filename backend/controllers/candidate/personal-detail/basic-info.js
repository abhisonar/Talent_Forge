const BasicInfo = require("../../../models/candidate/candidate-basicinfo");
const {
  getTokenDataFromRequest,
} = require("../../../shared/function/token.function");

exports.updateBasicInfo = async (req, res) => {
  const tokenData = getTokenDataFromRequest(req);
  const { firstName, middleName, lastName, bio } = req.body;
  const updatedData = await BasicInfo.findOneAndUpdate(
    { user_id: tokenData.id },
    { firstName, middleName, lastName, bio },
    { returnDocument: "after" }
  );

  return res.status(200).send({
    data: updatedData,
    message: "User basic info updated successfully",
  });
};

exports.getBasicInfo = async (req, res) => {
  const tokenData = getTokenDataFromRequest(req);
  const data = await BasicInfo.findOne({ user_id: tokenData.id });
  return res.status(200).send({
    data: data,
    message: "User basic info fetched successfully",
  });
};

exports;
