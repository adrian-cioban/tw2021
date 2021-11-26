const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Employee = sequelize.define(
  "Employee",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: DataTypes.STRING,
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    birthYear: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1900,
      },
    },
    salary: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
      },
      defaultValue: 0,
    },
  }
  //   { tableName: "Employees" }
);
