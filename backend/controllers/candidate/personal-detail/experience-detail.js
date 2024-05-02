const DesignationCollection = require("../../../models/master_data/designation.model");
const CompanyCollection = require("../../../models/master_data/company.model");
const {
  getTokenDataFromRequest,
} = require("../../../shared/function/token.function");
const CandidateExperienceCollection = require("../../../models/candidate/candidate-experience");

exports.listExperiences = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const data = await CandidateExperienceCollection.find({
      user_id: tokenData.id,
    })
      .populate(["companyId", "designationId"])
      .sort({ since: -1 });
    if (!data) {
      return res.status(404).send({
        error: "No experince details found for the user",
      });
    }

    return res.status(200).send({
      data,
      message: "Experience details fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Internal server error",
    });
  }
};

exports.addExperienceDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const {
      designationTitle,
      designationId,
      companyName,
      companyId,
      since,
      until,
      isCurrentlyWorking,
      description,
    } = req.body;

    const newData = new CandidateExperienceCollection({
      user_id: tokenData?.id,
      designationTitle,
      designationId,
      companyName,
      companyId,
      since,
      until,
      isCurrentlyWorking,
      description,
    });
    await newData.save();

    const reponseData = await CandidateExperienceCollection.findOne({
      _id: newData?._id,
    }).populate(["companyId", "designationId"]);
    return res.status(200).send({
      data: reponseData || {},
      message: "Experience details added successfully",
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
    });
  }
};

exports.updateExperienceDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const {
      designationTitle,
      designationId,
      companyName,
      companyId,
      since,
      until,
      isCurrentlyWorking,
      description,
    } = req.body;
    const { experienceDetailId } = req.params;

    const updatedData = await CandidateExperienceCollection.findOneAndUpdate(
      { _id: experienceDetailId },
      {
        $set: {
          designationTitle,
          designationId,
          companyName,
          companyId,
          since,
          until,
          isCurrentlyWorking,
          description,
        },
      },
      { new: true }
    ).populate(["companyId", "designationId"]);

    if (!updatedData) {
      return res.status(404).send({
        error: "Experience detail not found",
      });
    }
    return res.status(200).send({
      data: updatedData,
      message: "Experience detail updated successfully",
    });
  } catch (error) {
    return res.status(500).send({
      error: "Internal server error",
    });
  }
};

exports.deleteExperienceDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { experienceDetailId } = req.params;
    const deletedData = await CandidateExperienceCollection.findOneAndDelete({
      _id: experienceDetailId,
    });
    if (!deletedData) {
      return res.status(404).send({
        error: "Experience details not found",
      });
    }
    return res.status(200).send({
      message: "Experience details deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      err: error,
      message: "Internal server error",
    });
  }
};

exports.listDesignations = async (req, res) => {
  try {
    const { title } = req.query;
    const exp = title
      ? { title: { $regex: ".*" + title + ".*", $options: "i" } }
      : {};

    const designations = await DesignationCollection.find(exp).limit(15);

    return res.send({
      data: designations,
    });
  } catch (err) {
    return res.status(500).send({
      err: err,
      message: "Internal server error",
    });
  }
};

exports.listCompanies = async (req, res) => {
  try {
    const { title } = req.query;
    const exp = title
      ? { title: { $regex: ".*" + title + ".*", $options: "i" } }
      : {};

    const companies = await CompanyCollection.find(exp).limit(15);

    return res.send({
      data: companies,
    });
  } catch (err) {
    return res.status(500).send({
      err: err,
      message: "Internal server error",
    });
  }
};