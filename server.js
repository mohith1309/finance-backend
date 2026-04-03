const express = require("express");
const dotenv = require("dotenv");


dotenv.config();

const app = express();
app.use(express.json());

app.use("/auth", require("./routes/authRoutes"));
app.use("/records", require("./routes/recordRoutes"));
app.use("/dashboard", require("./routes/dashboardRoutes"));

app.get("/", (req, res) => {
  res.send("Finance Backend Running 🚀");
});

app.get("/demo", (req, res) => {
  res.json({
    message: "Finance Backend Working",
    sample: {
      totalIncome: 5000,
      totalExpense: 2000,
      net: 3000
    }
  });
});
app.listen(5000, () => console.log("Server running on port 5000"));