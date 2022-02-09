const Sequelize = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URI);
    console.log("connected to JAWS");
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
