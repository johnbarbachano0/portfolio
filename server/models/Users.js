module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userType: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Users;
};
