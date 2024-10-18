const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/quotesController");

router.route("/").get(quotesController.getAllQuotes);
router.get("/:category_id", quotesController.getQuoteByCategory);

module.exports = router;
