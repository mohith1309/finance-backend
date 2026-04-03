const Record = require("../models/Record");

exports.createRecord = async (req, res) => {
  const record = await Record.create(req.body);
  res.json(record);
};

exports.getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};