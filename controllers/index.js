const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// Handle wrong routes
router.use("*", (req, res) => {
  res.status(404).send("<h1>Wrong Route!</h1>");
});

module.exports = router;
