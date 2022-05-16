const express = require("express");
const router = express.Router();
const { Skills, Testimonials } = require("../models");
const { Op } = require("sequelize");
const { createTrail } = require("../middlewares/miscjs");

const getType = (type) => {
  return type === 1 ? "Users" : "Audit Trail";
};

//Get Maintenance
router.get("/", (req, res, next) => {
  const { q, type: typeJson } = req.query;
  const type = typeJson ? JSON.parse(typeJson) : "all";
  const isAll = type === "all";
  const queryObj = { [Op.substring]: q };
  const skillClause = {
    where: {
      [Op.or]: [{ title: queryObj }],
    },
    order: [
      ["type", "asc"],
      ["title", "asc"],
    ],
    attributes: { exclude: ["createdAt", "updatedAt"] },
  };

  const testimonialClause = {
    where: {
      deleted: false,
    },
    order: [
      ["createdAt", "asc"],
      ["createdBy", "asc"],
    ],
    attributes: { exclude: ["createdAt", "updatedAt"] },
  };

  const getSkills =
    type === 1 || isAll
      ? Skills.findAll(skillClause).then((results) => ({
          frontend: results.filter((item) => item.type === 1),
          backend: results.filter((item) => item.type === 2),
          analyst: results.filter((item) => item.type === 3),
          others: results.filter((item) => item.type === 4),
        }))
      : null;

  const getTestimonials =
    type === 2 || isAll
      ? Testimonials.findAll(testimonialClause).then((results) => ({
          testimonials: results,
        }))
      : null;

  Promise.all([getSkills, getTestimonials])
    .then((results) => {
      var newArr = [];
      const proc = results.filter((result) => result !== null);
      res.json(proc);
    })
    .catch(async (error) => {
      createTrail(
        `Get ${getType(type)} Maintenance`,
        "Error during get maintenance",
        null,
        null,
        null,
        error?.message
      );
      res.send(error?.message);
    });
});

router.post("/emailtest", (req, res, next) => {
  console.log(req.body);
  res.send(new Error());
});

// // Post New Maintenance
// router.post("/", (req, res, next) => {
//   const { uid, type: typeJson } = req.query;
//   const type = typeJson ? JSON.parse(typeJson) : "all";
//   const isAll = type === "all";
//   const newItem = req.body;
//   const postChangeReq =
//     type === 1 || isAll
//       ? ChangeRequestStatus.create(newItem).catch((error) => next(error))
//       : null;
//   const postModules =
//     type === 2 || isAll
//       ? Modules.create(newItem).catch((error) => next(error))
//       : null;
//   const postRoles =
//     type === 3 || isAll
//       ? Roles.create(newItem).catch((error) => next(error))
//       : null;
//   const postTimeLogTypes =
//     type === 4 || isAll
//       ? TimeLogTypes.create(newItem).catch((error) => next(error))
//       : null;
//   const postWorkStatus =
//     type === 6 || isAll
//       ? WorkStatus.create(newItem).catch((error) => next(error))
//       : null;
//   const postPermission =
//     type === 8 || isAll
//       ? Permissions.create(newItem).catch((error) => next(error))
//       : null;
//   const postPermissionRoleTag =
//     type === 9 || isAll
//       ? Permission_Role_Tags.create(newItem).catch((error) => next(error))
//       : null;
//   Promise.all([
//     postChangeReq,
//     postModules,
//     postRoles,
//     postTimeLogTypes,
//     postWorkStatus,
//     postPermission,
//     postPermissionRoleTag,
//   ])
//     .then((results) => {
//       const proc = results.filter((result) => result !== null);
//       createTrail(
//         `Create New ${getType(type)} Maintenance`,
//         "Create Success",
//         null,
//         proc[0],
//         uid,
//         null
//       );
//       res.json(proc);
//     })
//     .catch((error) => {
//       createTrail(
//         `Create New ${getType(type)} Maintenance`,
//         "Error during create",
//         null,
//         newItem,
//         uid,
//         error.message
//       );
//       res.send(error);
//     });
// });

// // Patch New Maintenance
// router.patch("/", (req, res, next) => {
//   const { uid, type: typeJson } = req.query;
//   const type = typeJson ? JSON.parse(typeJson) : "all";
//   const isAll = type === "all";
//   const newItem = req.body;
//   const patchChangeReq =
//     type === 1 || isAll
//       ? ChangeRequestStatus.findOne({ where: { id: newItem.id } }).then(
//           (prevValue) =>
//             ChangeRequestStatus.update(newItem, {
//               where: { id: newItem.id },
//             }).then((results) =>
//               ChangeRequestStatus.findOne({ where: { id: newItem.id } }).then(
//                 (newValue) => ({ newValue, prevValue })
//               )
//             )
//         )
//       : null;
//   const patchModules =
//     type === 2 || isAll
//       ? Modules.findOne({ where: { id: newItem.id } }).then((prevValue) =>
//           Modules.update(newItem, {
//             where: { id: newItem.id },
//           }).then((results) =>
//             Modules.findOne({ where: { id: newItem.id } }).then((newValue) => ({
//               newValue,
//               prevValue,
//             }))
//           )
//         )
//       : null;
//   const patchRoles =
//     type === 3 || isAll || isAll
//       ? Roles.findOne({ where: { id: newItem.id } }).then((prevValue) =>
//           Roles.update(newItem, {
//             where: { id: newItem.id },
//           }).then((results) =>
//             Roles.findOne({ where: { id: newItem.id } }).then((newValue) => ({
//               newValue,
//               prevValue,
//             }))
//           )
//         )
//       : null;
//   const patchTimeLogTypes =
//     type === 4 || isAll
//       ? TimeLogTypes.findOne({ where: { id: newItem.id } }).then((prevValue) =>
//           TimeLogTypes.update(newItem, {
//             where: { id: newItem.id },
//           }).then((results) =>
//             TimeLogTypes.findOne({ where: { id: newItem.id } }).then(
//               (newValue) => ({ newValue, prevValue })
//             )
//           )
//         )
//       : null;
//   const patchWorkStatus =
//     type === 6 || isAll
//       ? WorkStatus.findOne({ where: { id: newItem.id } }).then((prevValue) =>
//           WorkStatus.update(newItem, {
//             where: { id: newItem.id },
//           }).then((results) =>
//             WorkStatus.findOne({ where: { id: newItem.id } }).then(
//               (newValue) => ({ newValue, prevValue })
//             )
//           )
//         )
//       : null;

//   const patchPermission =
//     type === 8 || isAll
//       ? Permissions.findOne({ where: { id: newItem.id } }).then((prevValue) =>
//           Permissions.update(newItem, {
//             where: { id: newItem.id },
//           }).then((results) =>
//             Permissions.findOne({ where: { id: newItem.id } }).then(
//               (newValue) => ({ newValue, prevValue })
//             )
//           )
//         )
//       : null;

//   const patchPermissionRoleTag =
//     type === 9 || isAll
//       ? Permissions.findOne({ where: { id: newItem.id } }).then((prevValue) =>
//           Permission_Role_Tags.update(newItem, {
//             where: { id: newItem.id },
//           }).then((results) =>
//             Permission_Role_Tags.findOne({ where: { id: newItem.id } }).then(
//               (newValue) => ({ newValue, prevValue })
//             )
//           )
//         )
//       : null;

//   Promise.all([
//     patchChangeReq,
//     patchModules,
//     patchRoles,
//     patchTimeLogTypes,
//     patchWorkStatus,
//     patchPermission,
//     patchPermissionRoleTag,
//   ])
//     .then((results) => {
//       const proc = results.filter((result) => result !== null);
//       createTrail(
//         `Update ${getType(type)} Maintenance`,
//         "Update Success",
//         proc[0].prevValue,
//         proc[0].newValue,
//         uid,
//         null
//       );
//       res.json(proc);
//     })
//     .catch((error) => {
//       createTrail(
//         `Update ${getType(type)} Maintenance`,
//         "Error during update",
//         newItem,
//         uid,
//         error.message
//       );
//       res.send(error);
//     });
// });

module.exports = router;
