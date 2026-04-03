const Record = require("../models/Record");

exports.summary = async (req, res) => {
  const income = await Record.aggregate([
    { $match: { type: "INCOME" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  const expense = await Record.aggregate([
    { $match: { type: "EXPENSE" } },
    { $group: { _id: null, total: { $sum: "$amount" } } }
  ]);

  res.json({
    totalIncome: income[0]?.total || 0,
    totalExpense: expense[0]?.total || 0,
    net: (income[0]?.total || 0) - (expense[0]?.total || 0)
  });
};