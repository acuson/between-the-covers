const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./routes");

const sequlize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const POST = process.env.PORT;

// TODO: add session
// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//         maxAge: //how long do we want the lifespace
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//         db: sequelize
//     })
// };
// app.use(session(sess))

// TODO: add and init ejs view engine

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

// sequelize.sync().then(() => {

app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

// });
