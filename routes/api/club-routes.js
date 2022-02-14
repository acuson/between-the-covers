// ROUTE /api/clubs
const router = require('express').Router();
const { User, Club, Book, Tag, User_Club } = require('../../models');

// desc: get all clubs
// GET /api/clubs
router.get('/', async (req, res) => {
  try {
    const clubs = await Club.findAll({
      include: [{ model: Book }],
    });
    res.status(200).json(clubs);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// desc: get club by id
// GET /api/clubs/:id
router.get('/:id', async (req, res) => {
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
      description: req.body.description,
      book_id: req.body.book_id,
      capacity: req.body.capacity,
      active: req.body.active,
    };
    const response = await Club.create(reqBody);
    !response.ok
      ? res.status(500).json({ message: 'Club not created' })
      : res.status(200).json({ message: 'Club Created' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// desc: update club
// PUT /api/clubs/:id
router.put('/:id', async (req, res) => {
  try {
    // do stuff
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// desc: delete club
// DELETE /api/clubs/:id
router.delete('/:id', async (req, res) => {
  try {
    // do stuff
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
