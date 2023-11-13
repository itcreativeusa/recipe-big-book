const router = require("express").Router();
const multer = require("multer");

// Set up multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Set the filename to be the original name of the uploaded file
  },
});

const upload = multer({ storage: storage });

// POST route for file upload
router.post("/", upload.single("file"), (req, res) => {
  // The uploaded file is available as `req.file`
  const uploadedFile = req.file;

  // Process the uploaded file and send a response
  return res.json({
    message: "File uploaded successfully",
    file: uploadedFile,
  });
});

module.exports = router;
