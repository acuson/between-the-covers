const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const session = require("express-session");
const routes = require("./routes");

// Require models for sequelize?
const Models = require("./models");

// Connect Sequelize
const sequelize = require("./config/connection");

// Session Store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Initialize Server
const app = express();
const PORT = process.env.PORT || 3005;

// Session
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 360000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
// Init view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use('/public/css', express.static('public/css'));
app.use('/public/js', express.static('public/js'));

app.set("layout", "/views/your-clubs");

app.use(routes);

// Initialize sequelize and start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
});
