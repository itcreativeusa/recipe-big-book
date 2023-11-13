const router = require("express").Router();
const { User, Recipe } = require("../../models");
const withAuth = require("../../utils/auth");

// Route to render the profile page for the logged-in user
router.get("/", withAuth, async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Recipe }], // Include any associated recipes for the user
    });

    if (!userData) {
      // If the user data is not found, it might the session or database
      return res.redirect("/login");
    }

    // Extract the necessary user data to render the profile page
    const user = userData.get({ plain: true });

    // Pass the user data to the profile page template for rendering
    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
