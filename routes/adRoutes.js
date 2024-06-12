const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const adController = require("../controllers/adController");

router.get("/search", adController.searchAds);
router.post("/", adController.createAd);
router.get("/:id", adController.getAd);
router.get("/", adController.getAllAds);
router.delete("/:id", auth, adController.deleteAd);
router.put("/:id", auth, adController.updateAd);

module.exports = router;
