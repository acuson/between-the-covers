const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class User_Club extends Model {}

User_Club.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        club_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user_club",
    }
);

module.exports = User_Club;
