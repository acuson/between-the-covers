const dotenv = require("dotenv");
dotenv.config();
const path = require("path");
const express = require("express");
//const session = require("express-session");
const routes = require("./routes");

<<<<<<< HEAD
const sequlize = require("./config/connection");
/* const SequelizeStore = require("connect-session-sequelize")(session.Store); */
=======
//Import and require mysql2
const mysql = require('mysql2');

/* const sequlize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store); */
>>>>>>> gino-branch

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

// TODO: add and init ejs view engine

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);


app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));

// });
