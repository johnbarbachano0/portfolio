module.exports = (sequelize, DataTypes) => {
  const Skills = sequelize.define(
    "Skills",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Skills;
};
