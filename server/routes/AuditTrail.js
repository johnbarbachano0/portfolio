const express = require("express");
const router = express.Router();
const { AuditTrail } = require("../models");
const { Op } = require("sequelize");

//Get All History
router.get("/", (req, res, next) => {
  try {
    const { q } = req?.query;
    const queryObj = { [Op.substring]: q };
    AuditTrail.findAll({
      where: {
        [Op.or]: [
          { action: queryObj },
          { message: queryObj },
          { prevValue: queryObj },
          { newValue: queryObj },
          { error: queryObj },
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

module.exports = router;
