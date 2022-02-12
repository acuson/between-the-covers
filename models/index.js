const Club = require("./Club");
const Tag = require("./Tag");
const User = require("./User");
const User_Club = require("./User_Club");

Club.hasMany(User, { through: User_Club });
Club.hasMany(Tag, {
    foreignKey: "tag_id",
});

User.belongsToMany(Club, { through: User_Club });

module.exports = { Club, Tag, User, User_Club };
