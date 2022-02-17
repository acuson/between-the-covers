// ROUTE /api/clubs
const router = require("express").Router();
const { User, Club, Book, Tag, User_Club } = require("../../models");

// desc: get all clubs
// GET /api/clubs
router.get("/", async (req, res) => {
    try {
        const clubs = await Club.findAll(/* {
      include: [{ model: Book }, { model: User }],
    } */);
        res.status(200).json(clubs);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

//desc: get clubs for explore feature
router.get("/", async (req, res) => {
    try {
        const clubs = await Club.findAll(/* {
      include: [{ model: Book }, { model: User }],
    } */);

    res.render("explore-clubs", {clubs:clubs});
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})
//desc: get clubs for explore feature
router.get('/', async (req, res) => {
  try {
    const clubs = await Club.findAll(/* {
      include: [{ model: Book }, { model: User }],
    } */);
    res.render("explore-clubs", {clubs:clubs});
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})



// desc: get club by id
// GET /api/clubs/:id
router.get("/:id", async (req, res) => {
    try {
        const club = await Club.findByPk(req.params.id);
        club == null
            ? res
                  .status(404)
                  .json({ message: `Club with id ${req.params.id} not found` })
            : res.status(200).json(club);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// desc: Create club
// POST /api/clubs/
router.post('/', async (req, res) => {
  try {
    const reqBody = {
      name: req.body.name,
      description: req.body.description,
      club_book: req.body.club_book,
      book_id: req.body.book_id,
      capacity: req.body.capacity,
      size: 1,
      meeting_day: req.body.meeting_day,
      meeting_time: req.body.meeting_time,
      meeting_start: req.body.meeting_start,
      meeting_link: req.body.meeting_link,
      active: req.body.active,
    };
    const response = await Club.create(reqBody);
    res.status(200).json({ message: 'Club Created' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//add member to club
//POST /api/clubs/join

router.post("/join", async (req, res) => {
    try {
        const memJoin = await User_Club.create({
            user_id: req.body.user_id,
            club_id: req.body.club_id,
        });
        res.status(200).json(memJoin);
    } catch (err) {
        res.status(500).json(err);
    }
});

// desc: update club size when member joins
// PUT /api/clubs/:id
router.put('/:id', async (req, res) => {
  try { 
    const updateClubData = await Club.update(
      {
        size: req.body.size
      },
      {where:{
        id:req.params.id,
        }
      });
    if(!updateClubData){
      res.status(400).json({message:'No club is associated with that id'})
    }  
    res.status(200).json({message:'Size of club updated'})
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})
/* router.put("/:id", async (req, res) => {
    try {
        await Club.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json({
            message: `Success: Club with id ${req.params.id} was updated with new info ${req.body}`,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
}); */

// desc: delete club
// DELETE /api/clubs/:id
router.delete("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;
