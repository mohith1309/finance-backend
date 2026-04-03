const router = require("express").Router();
const auth = require("../middleware/auth");
const dc = require("../controllers/dashboardController");

router.get("/summary", auth, dc.summary);

module.exports = router;