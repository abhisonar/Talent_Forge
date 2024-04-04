const EducationDetails = require("../../../models/candidate/candidate-education");
const {
  getTokenDataFromRequest,
} = require("../../../shared/function/token.function");

exports.listEducations = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const data = await EducationDetails.find({ user_id: tokenData.id });
    if (!data) {
      return res.status(404).send({
        error: "No education details found for the user",
      });
    }

    return res.status(200).send({
      data,
      message: "Education details fetched successfully",
    });
  } catch (error) {
    return res.status(500).send({
      error: "Internal server error",
    });
  }
};

exports.addEducationDetail = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).send({
      error: "Internal server error",
    });
  }
};

exports.updateEducationDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { education, institute, course, since, until, gradingSystem, marks } =
      req.body;
    const { educationDetailId } = req.params;
    const updatedData = await EducationDetails.findOneAndUpdate(
      { _id: educationDetailId },
      {
        $set: {
          education,
          institute,
          course,
          since,
          until,
          gradingSystem,
          marks,
        },
      },
      { new: true }
    );

    if (!updatedData) {
      return res.status(404).send({
        error: "Education detail not found",
      });
    }
    return res.status(200).send({
      data: updatedData,
      message: "Education detail updated successfully",
    });
  } catch (error) {
    return res.status(500).send({
      error: "Internal server error",
    });
  }
};

exports.deleteEducationDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { educationDetailId } = req.params;
    const deletedData = await EducationDetails.findOneAndDelete({
      _id: educationDetailId,
    });
    if (!deletedData) {
      return res.status(404).send({
        error: "Education details not found",
      });
    }
    return res.status(200).send({
      message: "Education details deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      err: error,
      message: "Internal server error",
    });
  }
};
