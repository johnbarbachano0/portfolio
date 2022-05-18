const express = require("express");
const router = express.Router();
const { Guests } = require("../models");
const { Op } = require("sequelize");
const { createTrail, createResponse } = require("../middlewares/miscjs");

//Get Guests
router.get("/", (req, res, next) => {
  try {
    const { q } = req?.query;
    const queryObj = { [Op.substring]: q };
    Guests.findAll({
      where: {
        [Op.or]: [
          { name: queryObj },
          { guestType: queryObj },
          { createdAt: queryObj },
          { updatedAt: queryObj },
        ],
      },
      order: [["createdAt", "DESC"]],
    }).then((results) => {
      res.json(results);
    });
  } catch (error) {
    next(error);
  }
});

//Post New Guest
router.post("/", (req, res, next) => {
  const data = req.body;
  try {
    Guests.create(data).then((user) => {
      createTrail("Save Guest", "Save success", null, data, null, null);
      res.json(user);
    });
  } catch (error) {
    createTrail("Save Guest", "Save fail", null, data, null, error?.message);
    res.json(
      createResponse("error", "Error encountered when saving to database.")
    );
  }
});

//Patch Guest
router.patch("/", (req, res, next) => {
  const newItem = req?.body;
  try {
    Guests.findByPk(newItem.id).then((prevVal) => {
      Guests.update(newItem, {
        where: { id: newItem.id },
      }).then((results) => {
        createTrail(
          "Update Guest",
          "Save success",
          prevVal,
          newItem,
          null,
          null
        );
        res.json(results);
      });
    });
  } catch (error) {
    createTrail(
      "Update Guest",
      "Update fail",
      null,
      newItem,
      null,
      error?.message
    );
    res.json(
      createResponse("error", "Error encountered when saving to database.")
    );
  }
});

module.exports = router;
