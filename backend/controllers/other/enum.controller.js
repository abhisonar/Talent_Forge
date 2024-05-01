const EnumCollection = require('../../models/other/enum.modal');

exports.getEnums = async (req, res) => {
  try {
    const enums = await EnumCollection.find({});

    return res.status(200).json({
      data: enums,
      message: 'Enums fetched successfully',
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
      message: 'Internal Server Error',
    });
  }
};

exports.getEnumByType = async (req, res) => {
  try {
    const { enumType } = req.params;

    const enums = await EnumCollection.find({ codeType: enumType });

    return res.status(200).json({
      data: enums,
      message: 'Enums fetched successfully',
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
      message: 'Internal Server Error',
    });
  }
};
