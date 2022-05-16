module.exports = (sequelize, DataTypes) => {
  const Testimonials = sequelize.define(
    "Testimonials",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      testimonial: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      role: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return Testimonials;
};
