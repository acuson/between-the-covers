const Sequelize = require("sequelize");
require('dotenv').config();

let sequelize;

if (process.env.MYSQL_URL) {
    sequelize = new Sequelize(process.env.MYSQL_URL);
    console.log("connected to Behind The Covers Database");
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3305,
        }
    );
    console.log("Connected to localhost");
}

module.exports = sequelize;
