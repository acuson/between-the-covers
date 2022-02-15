const dotenv = require("dotenv"); //For seed
dotenv.config();
const sequelize = require("../config/connection");
const { User, Club, Tag, User_Club } = require("../models");

const usersData = [
    {
        id: 1,
        first_name: "Gino",
        last_name: "Colman",
        username: "GinoCol",
        email: "Gino@gmail.com",
        password: "iamginoman",
    },
    {
        first_name: "Darby",
        last_name: "Johnson",
        username: "DarbyJohn",
        email: "Darby@gmail.com",
        password: "iamdarbygal",
    },
    {
        first_name: "Alyssa",
        last_name: "Cuson",
        username: "AlyssaCus",
        email: "Alyssa@gmail.com",
        password: "iamalyssagal",
    },
    {
        first_name: "Christine",
        last_name: "Nguyen",
        username: "ChristineNgu",
        email: "Christine@gmail.com",
        password: "iamchristinegal",
    },
    {
        first_name: "Kevin",
        last_name: "Lacson",
        username: "KevinLac",
        email: "Kevin@gmail.com",
        password: "iamkevinman",
    },
];

const clubData = [
    {
        name: "GOLDEN PANDAS",
        description: "This club is for the Golden Pandas!",
        club_book: "Eloquent Javascript",
        capacity: 5,
        meeting_day: "Monday",
        meeting_time: "7pm",
        meeting_link: "https://discord.gg/vDstjReC",
        active: true,
    },
    {
        name: "Wizards, Witches, and Wine",
        description: "A book club for diving deep into the magical world of a wine bottle..oh and Harry Potter",
        club_book: "Harry Potter and the Prisoner of Azkaban",
        capacity: 5,
        meeting_day: "Monday",
        meeting_time: "7pm",
        meeting_link: "https://discord.gg/vDstjReC",
        active: true,
    },
    {
        name: "The Readers in the Rye",
        description: "A club for (re)discovering the clasics!",
        club_book: null,
        capacity: 5,
        meeting_day: "Monday",
        meeting_time: "7pm",
        meeting_link: "https://discord.gg/vDstjReC",
        active: true,
    }
    
];

const userClubData = [
    {
        user_id: 1,
        club_id: 1,
    },
    {
        user_id: 2,
        club_id: 1,
    },
    {
        user_id: 3,
        club_id: 1,
    },
    {
        user_id: 4,
        club_id: 1,
    },
    {
        user_id: 5,
        club_id: 1,
    },
];

const tagData = {
    tag_name: "Fantasy",
};

const seedUser = () => User.bulkCreate(usersData);
const seedClub = () => Club.bulkCreate(clubData);
const seedUserClub = () => User_Club.bulkCreate(userClubData);
const seedTag = () => Tag.create(tagData);

const seedAll = async () => {
    await sequelize.sync();
    await seedUser();
    console.log("USERS SEEDED");
    await seedClub();
    console.log("CLUBS SEEDED");
    await seedUserClub();
    console.log("USER_CLUB SEEDED");
    await seedTag();
    console.log("TAGS SEEDED");
    process.exit(0);
};

seedAll();
