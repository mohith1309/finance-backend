const express = require("express");
const router = express.Router();

// 🔥 Pre-added dummy records (so UI works instantly)
let records = [
  { amount: 5000, type: "income", category: "salary" },
  { amount: 2000, type: "expense", category: "food" },
  { amount: 1000, type: "expense", category: "travel" }
];

// GET dashboard summary
router.get("/summary", (req, res) => {
  let totalIncome = 0;
  let totalExpense = 0;

  records.forEach(r => {
    if (r.type === "income") totalIncome += r.amount;
    else totalExpense += r.amount;
  });

  res.json({
    totalIncome,
    totalExpense,
    netBalance: totalIncome - totalExpense
  });
});

module.exports = router;