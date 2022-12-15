const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class User extends Model {}

User.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.INTEGER,
        },
    },
    {
        sequelize,
        modelName: "user",
        timestamps: false
    }
);

module.exports = User;