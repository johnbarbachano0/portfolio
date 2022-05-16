const express = require("express");
const router = express.Router();
const { Testimonials } = require("../models");
const { Op } = require("sequelize");

//Get All Testimonial
router.get("/", (req, res, next) => {
  try {
    const { q } = req?.query;
    const queryObj = { [Op.substring]: q };
    Testimonials.findAll({
      where: {
        [Op.or]: [
          { createdBy: queryObj },
          { testimonial: queryObj },
          { role: queryObj },
        ],
        deleted: false,
      },
      order: [["createdAt", "DESC"]],
    }).then((results) => {
      res.json(results);
    });
  } catch (error) {
    next(error);
  }
});

//Post Testimonial
router.post("/", (req, res, next) => {
  try {
    const newTestimonial = req?.body;
    Testimonials.create(newTestimonial).then((results) => res.json(results));
  } catch (error) {
    next(error);
  }
});

//Patch Testimonial
router.patch("/", (req, res, next) => {
  try {
    const newItem = req?.body;
    Testimonials.update(newItem, {
      where: { id: newItem.id },
    }).then((results) => res.json(results));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
