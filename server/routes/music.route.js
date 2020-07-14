const express = require("express");
const musicController = require("../controllers/music.controller.js");
const upload = require("../util/multer.js");

const router = express.Router();

router
  .route("/")
  .get(musicController.getAllMusic)
  .post(upload.upload.single("music"), musicController.addNewMusic);

router.route("/:musicId").delete(musicController.deleteMusic);

module.exports = router;
