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
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        club_book: {
            type: DataTypes.TEXT,
            defaultValue:'TBD'
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        size:{
            type: DataTypes.TEXT,
            defaultValue:'TBD'
        },
        meeting_day:{
            type: DataTypes.TEXT,
            defaultValue:'TBD'
        },
        meeting_time: {
            type: DataTypes.TEXT,
            defaultValue:'TBD'
        },
        start_date:{
            type: DataTypes.TEXT,
            defaultValue:'TBD'
        },
        meeting_link:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        joinable: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
        }
    },
    {
        hooks:{
            beforeUpdate(club) {
                console.log(club.size)
                if(club.capacity == club.size){
                    club.joinable = false;
                }
            },
            beforeUpdate(club) {
                console.log(club.size)
                if(club.capacity == club.size){
                    club.joinable = false;
                }
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "club",
    }
);

module.exports = Club;
