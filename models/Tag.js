const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Tag extends Model {}

Tag.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    tag_name: {
        type: DataTypes.STRING,
    },
});

module.exports = Tag;
