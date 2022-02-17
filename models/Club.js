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
        },
        capacity: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
<<<<<<< HEAD
        size:{
            type: DataTypes.INTEGER
        },
        meeting_day:{
            type: DataTypes.TEXT
=======
        meeting_day: {
            type: DataTypes.TEXT,
>>>>>>> 07ae92a25bb89eda2dc212ab3438672d79dfd725
        },
        meeting_time: {
            type: DataTypes.TEXT,
        },
        start_date:{
            type: DataTypes.DATEONLY
        },
        meeting_link:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
<<<<<<< HEAD
        joinable: {
            type: DataTypes.BOOLEAN,
            allowNull:false,
            set: function(){
                if(this.getDataValue('capacity')-this.getDataValue('size') > 0){
                    this.setDataValue('joinable', true)
                } else{
                    this.setDataValue('joinable', false)
                }
            }
        }
=======
        leader_id: {
            type: DataTypes.STRING,
        },
>>>>>>> 07ae92a25bb89eda2dc212ab3438672d79dfd725
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
