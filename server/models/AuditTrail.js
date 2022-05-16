module.exports = (sequelize, DataTypes) => {
  const AuditTrail = sequelize.define(
    "AuditTrail",
    {
      action: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      prevValue: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      newValue: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      error: {
        type: DataTypes.STRING(9999),
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return AuditTrail;
};
