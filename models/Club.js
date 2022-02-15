const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Club extends Model {}

Club.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull:false
        },
        club_book:{
            type: DataTypes.TEXT
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        meeting_link:{
            type: DataTypes.TEXT,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "club",
    }
);

module.exports = Club;
