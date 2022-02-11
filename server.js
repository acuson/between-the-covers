const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
//const session = require("express-session");

const sequlize = require("./config/connection");
/* const SequelizeStore = require("connect-session-sequelize")(session.Store); */

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
app.use(express.static(path.join(__dirname, "public")));

const routes = require("./routes");

app.use(routes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
