const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const Sequelize = require("sequelize");


let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
    console.log("connected to JAWS");
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
