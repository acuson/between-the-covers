require("dotenv").config();
const Sequelize = require("sequelize");
require('dotenv').config();

let sequelize;

<<<<<<< HEAD
if (process.env.MYSQL_URL) {
    sequelize = new Sequelize(process.env.MYSQL_URL);
    console.log("connected to Behind The Covers Database");
=======
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    console.log("connected to JAWS");
>>>>>>> 616721dc2f9a39361681a9e7fbb615e1fcb7eb3e
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
        }
    );
    console.log("Connected to localhost");
}

module.exports = sequelize;
