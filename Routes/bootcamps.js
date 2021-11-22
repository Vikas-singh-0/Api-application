const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
  createBootcamp,
} = require("../Controllers/bootcamps");



router
    .route("/")
    .post(createBootcamp)
    .get(getBootcamps)


router
  .route("/:id")
  .get(getBootcamp)
  .delete(deleteBootcamp)
  .put(updateBootcamp);

module.exports = router;
