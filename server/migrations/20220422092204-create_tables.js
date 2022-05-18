"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.createTable(
        "Users",
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          user: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          userType: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
        }
      ),
      queryInterface.createTable(
        "AuditTrail",
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          action: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          message: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          prevValue: {
            type: Sequelize.JSON,
            allowNull: true,
          },
          newValue: {
            type: Sequelize.JSON,
            allowNull: true,
          },
          error: {
            type: Sequelize.STRING(9999),
            allowNull: true,
          },
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
        }
      ),
      queryInterface.createTable(
        "Skills",
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          title: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          type: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          level: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
        }
      ),
      queryInterface.createTable(
        "Testimonials",
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          createdBy: {
            type: Sequelize.STRING,
            allowNull: false,
          },
          testimonial: {
            type: Sequelize.STRING(1000),
            allowNull: false,
          },
          role: {
            type: Sequelize.INTEGER,
            allowNull: false,
          },
          deleted: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
          },
          createdAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
          updatedAt: {
            type: "TIMESTAMP",
            defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            allowNull: false,
          },
        },
        {
          freezeTableName: true,
        }
      ),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable("Users"),
      queryInterface.dropTable("AuditTrail"),
      queryInterface.dropTable("Skills"),
    ]);
  },
};
