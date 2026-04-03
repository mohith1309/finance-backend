const router = require("express").Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const rc = require("../controllers/recordController");

router.post("/", auth, role(["ADMIN"]), rc.createRecord);
router.get("/", auth, rc.getRecords);

module.exports = router;