const ValentineController = require("../controller/ValentineController");
const router = require("express").Router();

router.post("/", ValentineController.create);
router.get("/:slug", ValentineController.get);
module.exports = router;
