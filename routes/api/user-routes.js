// ROUTE /api/users
const router = require("express").Router();
const { User, Club, Book, Tag, User_Club } = require("../../models");

// DESC: get all users
//GET /api/users
router.get("/", async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [{ model: Club }],
            attributes: { exclude: ["password"] },
        });
        res.status(200).json(allUsers);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DESC: get user by primary key
// GET /api/users/:id
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ["password"],
            },
        });
        user == null
            ? res
                  .status(404)
                  .json({ message: `User with id ${req.params.id} not found` })
            : res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// DESC: endpoint to verify credentials
// POST /api/users/login
router.post('/login', async (req, res) => {
    /*   if(req.session.logged_in){
          res.render('/')
          return
      } */
      try{
          const userData = await User.findOne({
              where:{email:req.body.email}
          })
  
          if(!userData) {
              res.status(400).json({message: 'Incorrect email. Please try again.'})
              return;
          }
  
          const validPassword = await userData.checkPassword(req.body.password)
          
          if (!validPassword) {
              res
                .status(400)
                .json({ message: 'Incorrect password, please try again' });
              return;
            }
  
          req.session.save(() => {
              req.session.user_id = userData.id
              req.session.logged_in = true
  
/*               console.log(`session id: ${req.session.user_id}`)  */
  
              res.status(200).json({user: userData, message: 'You are now logged in!'})
          })
  
      /*     console.log(`session id: ${req.session.user_id}`) */
          
      } catch(err){
          console.log(err)
      }
  })

// POST /api/users/logout
router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

// desc: Create User
// POST /api/users/
router.post("/", async (req, res) => {
    try {
        const userInfo = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        };
        const response = await User.create(userInfo);
        res.status(200).json(response);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

/* // desc: update user
// PUT /api/users/:id
router.put('/:id', async (req, res) => {
  try {
    //     const userInfo = {
    //       first_name: req.body.first_name,
    //       last_name: req.body.last_name,
    //       username: req.body.user,
    //       email: req.body.email,
    //       password: req.body.password,
    //     };
    //     const response = User.update(userInfo, {
    //       where: {
    //         id: req.params.id,
    //       },
    // });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
}); */

/* // desc: delete user
// DELETE /api/users/:id
router.delete("/:id", async (req, res) => {
    try {
        // do stuff
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});
*/
module.exports = router;
