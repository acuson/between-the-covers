const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Club extends Model {}

Club.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    book_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'book',
        key: 'id',
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: 'club',
  }
);

module.exports = Club;
