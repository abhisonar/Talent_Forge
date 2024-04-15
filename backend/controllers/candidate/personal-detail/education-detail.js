const CandidateEducationCollection = require('../../../models/candidate/candidate-education');
const EnumCollection = require('../../../models/other/enum.modal');
const InstituteCollection = require('../../../models/master_data/institute.model');
const { getTokenDataFromRequest } = require('../../../shared/function/token.function');
const EducationTypeCollection = require('../../../models/master_data/educationType.model');
const CourseCollection = require('../../../models/master_data/course.model');

exports.listEducations = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const data = await CandidateEducationCollection.find({
      user_id: tokenData.id,
    }).populate(['gradingSystem', 'educationType', 'course', 'institute']);
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
    console.log(error);
    return res.status(500).send({
      error: 'Internal server error',
    });
  }
};

exports.addEducationDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { educationType, institute, course, since, until, gradingSystem, marks } = req.body;

    const gradingSystemEnum = await EnumCollection.findOne({ code: gradingSystem });

    const newData = new CandidateEducationCollection({
      user_id: tokenData?.id,
      educationType,
      institute,
      course,
      since,
      until,
      gradingSystem: gradingSystemEnum?._id,
      marks,
    });
    await newData.save();
    return res.status(200).send({
      data: newData || {},
      message: 'Education details added successfully',
    });
  } catch (error) {
    return res.status(500).send({
      error: error,
    });
  }
};

exports.updateEducationDetail = async (req, res) => {
  try {
    const tokenData = getTokenDataFromRequest(req);
    const { educationType, institute, course, since, until, gradingSystem, marks } = req.body;
    const { educationDetailId } = req.params;
    const updatedData = await CandidateEducationCollection.findOneAndUpdate(
      { _id: educationDetailId },
      {
        $set: {
          educationType,
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
    const exp = title ? { title: { $regex: '.*' + title + '.*', $options: 'i' } } : {};

    const institutes = await InstituteCollection.find(exp).limit(15);

    return res.send({
      data: institutes,
    });
  } catch (err) {
    return res.status(500).send({
      err: err,
      message: 'Internal server error',
    });
  }
};

exports.listEducationType = async (req, res) => {
  try {
    const { title } = req.query;

    const exp = title ? { title: { $regex: '.*' + title + '.*', $options: 'i' } } : {};

    const educationType = await EducationTypeCollection.find(exp).limit(15);

    return res.send({
      data: educationType,
    });
  } catch (err) {
    return res.status(500).send({
      err: err,
      message: 'Internal server error',
    });
  }
};

exports.listCourses = async (req, res) => {
  try {
    const { title } = req.query;

    const exp = title ? { title: { $regex: '.*' + title + '.*', $options: 'i' } } : {};

    const courses = await CourseCollection.find(exp).limit(15);

    return res.send({
      data: courses,
    });
  } catch (err) {
    return res.status(500).send({
      err: err,
      message: 'Internal server error',
    });
  }
};
