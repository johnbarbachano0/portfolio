require("dotenv").config();
const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const { createTrail } = require("../middlewares/miscjs");
const { Op } = require("sequelize");

//Save User
router.post("/", (req, res, next) => {
  try {
    const newUser = req.body;
    createTrail("Save User", "Save success", null, newUser, null, null);
    Users.create(newUser).then((user) => res.json(user));
  } catch (error) {
    createTrail("Save User", "Save fail", null, newUser, null, error?.message);
    res.json(
      createResponse("error", "Error encountered when saving to database.")
    );
  }
});

module.exports = router;
