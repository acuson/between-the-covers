const router = require('express').Router();
const {User, Club, Tag, User_Club } = require("../models");

$('.dislike').on('click', dislike)


function dislike(e){
    const card = e.target.parentElement.parentElement
    card.style.visibility = 'hidden'
    card.style.opacity = 0;
    card.style.transition= 'opacity 1s';

}

function like(e){
    const card = e.target.parentElement.parentElement
    const clubId = card.dataset.clubId

    //GET USER ID and CLUB ID
    //CREATE BOJECT
    //EXPORT OBJECT OUT to router page

    /* router.post('/', async (req,res) =>{
        try{
            const userData = await User.create({
                user_id: 1,
                club_id: `${clubId}`
            });
            res.status(200).json(userData);
        } catch(err){
            res.status(400).json(err)
        }
    }) */

    card.style.visibility = 'hidden'
    card.style.opacity = 0;
    card.style.transition= 'opacity 1s';

}