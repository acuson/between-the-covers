const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
//const session = require("express-session");

<<<<<<< HEAD
const sequelize = require('./config/connection');
const Models = require('./models');

=======
const sequelize = require("./config/connection");
const Models = require("./models");
>>>>>>> 19c2061b9bd79dd952be05d3bef147add3af85df
/* const SequelizeStore = require("connect-session-sequelize")(session.Store); */
//Import and require mysql2
const mysql = require("mysql2");

/* const sequlize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store); */

const app = express();
const PORT = process.env.PORT || 3005;

// TODO: add session
// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//         maxAge: //how long do we want the lifespace
//     },
//     resave: false,
//     saveUninitialized: true,å
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
// app.use(session(sess))

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
<<<<<<< HEAD
app.use(express.static(path.join(__dirname, 'public')));
app.use('/jquery', express.static(__dirname, + '/node_modules/jquery/dist/'));
=======
app.use(express.static(path.join(__dirname, "public")));
>>>>>>> 19c2061b9bd79dd952be05d3bef147add3af85df

app.set("layout", "/views/your-clubs");
const routes = require("./routes");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
});
