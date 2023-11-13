// update-profile.js
const express = require("express");
const router = express.Router();

// Route handler for the "/update-profile" route
router.post("/update-profile", (req, res) => {
  // Retrieve the name and email from the form submission
  const { name, email } = req.body;

  // Update the user's profile in the database
  req.user.name = name;
  req.user.email = email;

  // Save the updated user object to the database
  req.user
    .save()
    .then((updatedUser) => {
      // Redirect the user back to the profile page after updating the profile
      res.redirect("/profile");
    })
    .catch((err) => {
      // Handle any errors that occurred while saving the user's profile
      console.error("Error updating profile:", err);
      res.status(500).send("Error updating profile.");
    });
});

module.exports = router;
