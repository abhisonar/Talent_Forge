const EducationDetails = require("../../../models/candidate/candidate-education");
const {
  getTokenDataFromRequest,
} = require("../../../shared/function/token.function");

exports.listEducations = async (req, res) => {
  const tokenData = getTokenDataFromRequest(req);
  const data = await EducationDetails.find({ user_id: tokenData.id });
  return res.status(200).send({
    data: data || [],
    message: "Education details fetched successfully",
  });
};

exports.addEducationDetail = async (req, res) => {
  const tokenData = getTokenDataFromRequest(req);
  const { education, institute, course, since, until, gradingSystem, marks } =
    req.body;
  const data = new EducationDetails({
    user_id: tokenData.id,
    education,
    institute,
    course,
    since,
    until,
    gradingSystem,
    marks,
  });
  await data.save();
  return res.status(200).send({
    data: data || [],
    message: "Education details added successfully",
  });
};
