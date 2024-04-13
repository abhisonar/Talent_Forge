const CandidateEducationCollection = require('../../../models/candidate/candidate-education');
const EnumModel = require('../../../models/other/enum.modal');
const InstituteCollection = require('../../../models/master_data/institute.model');
const { getTokenDataFromRequest } = require('../../../shared/function/token.function');

exports.listEducations = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const data = await CandidateEducationCollection.find({ user_id: tokenData.id }).populate([
      'educationType',
      'gradingSystem',
    ]);
    if (!data) {
      return res.status(404).send({
        error: 'No education details found for the user',
      });
    }

    return res.status(200).send({
      data,
      message: 'Education details fetched successfully',
    });
  } catch (error) {
    return res.status(500).send({
      error: 'Internal server error',
    });
  }
};

exports.addEducationDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { education, institute, course, since, until, gradingSystem, marks } = req.body;

    const educationEnum = await EnumModel.findOne({ code: education });
    const gradingSystemEnum = await EnumModel.findOne({ code: gradingSystem });

    const data = new CandidateEducationCollection({
      user_id: tokenData?.id,
      educationType: educationEnum?._id,
      institute,
      course,
      since,
      until,
      gradingSystem: gradingSystemEnum?._id,
      marks,
    });
    await data.save();
    return res.status(200).send({
      data: data || [],
      message: 'Education details added successfully',
    });
  } catch (error) {
    return res.status(500).send({
      error: 'Internal server error',
    });
  }
};

exports.updateEducationDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { education, institute, course, since, until, gradingSystem, marks } = req.body;
    const { educationDetailId } = req.params;
    const updatedData = await CandidateEducationCollection.findOneAndUpdate(
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
        error: 'Education detail not found',
      });
    }
    return res.status(200).send({
      data: updatedData,
      message: 'Education detail updated successfully',
    });
  } catch (error) {
    return res.status(500).send({
      error: 'Internal server error',
    });
  }
};

exports.deleteEducationDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { educationDetailId } = req.params;
    const deletedData = await CandidateEducationCollection.findOneAndDelete({
      _id: educationDetailId,
    });
    if (!deletedData) {
      return res.status(404).send({
        error: 'Education details not found',
      });
    }
    return res.status(200).send({
      message: 'Education details deleted successfully',
    });
  } catch (error) {
    return res.status(500).send({
      err: error,
      message: 'Internal server error',
    });
  }
};

exports.listInstitutes = async (req, res) => {
  try {
    const { title } = req.query;
    const institutes = await InstituteCollection.find({
      title: { $regex: '.*' + title + '.*', $options: 'i' },
    }).limit(15);

    return res.send({
      data: institutes,
    });
  } catch (err) {
    return res.status(500).send({
      err: error,
      message: 'Internal server error',
    });
  }
};
