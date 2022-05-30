var express = require("express");
var router = express.Router();
const atr = require("../controllers/authorController");
const pb = require("../controllers/publisherController");
const bk = require("../controllers/bookController");

router.route("/getAuthor/:id").get(atr.getAuthor);
router.route("/createAuthor").post(atr.createAuthor);
router.route("/editAuthor/:id&:up").post(atr.editAuthor);
router.route("/rmAuthor/:id").get(atr.rmAuthor);
router.route("/getPublisher/:id").get(pb.getPublisher);
router.route("/createPublisher").post(pb.createPublisher);
router.route("/editPublisher/:id&:up").post(pb.editPublisher);
router.route("/rmPublisher/:id").get(pb.rmPublisher);
router.route("/getBook/:id").get(bk.getBook);
router.route("/createBook").post(bk.createBook);
router.route("/editBook/:id&:up").post(bk.editBook);
router.route("/rmBook/:id").get(bk.rmBook);

module.exports = router;
