const router = require("express").Router();
const { User, Recipe, Category, Ingredient } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE new user
router.post("/", (req, res) => {
  User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      // Set up sessions with a 'logged_in' variable set to `true`
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;
      res.status(200).json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/// Route to fetch user-specific recipes
router.get("/recipes", withAuth, async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Recipe,
          include: [
            { model: Category, as: "category" },
            { model: Ingredient, as: "ingredients" },
          ],
        },
      ],
    });

    if (!userData) {
      // If the user is not found, return an empty array or an appropriate error message
      return res.status(404).json({ error: "User not found" });
    }

    const user = userData.get({ plain: true });
    const recipes = user.recipes; // Assuming that the association is set up correctly

    // Send the user-specific recipes in the response
    res.json(recipes);
  } catch (err) {
    console.error("Error fetching user recipes:", err);
    res.status(500).json(err);
  }
});
// Login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res
          .status(400)
          .json({ message: "Incorrect email or password. Please try again!" });
        return;
      }

      dbUserData
        .checkPassword(req.body.password)
        .then((validPassword) => {
          if (!validPassword) {
            res.status(400).json({
              message: "Incorrect email or password. Please try again!",
            });
            return;
          }

          // Once the user successfully logs in, set up the sessions variable 'logged_in'
          req.session.logged_in = true;
          req.session.user_id = dbUserData.id;
          res
            .status(200)
            .json({ user: dbUserData, message: "You are now logged in!" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Logout
router.post("/logout", (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
