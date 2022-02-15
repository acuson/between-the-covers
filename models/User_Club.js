const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class User_Club extends Model {}

User_Club.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
                model: "club",
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
