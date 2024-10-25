const express = require("express");
const Property_controller = require("../Controllers/Property_Controller");
const upload = require("../Middleware/multerconfig"); // Import the Multer configuration
const PropertyController = new Property_controller();
const router = express.Router();

// Route to add a property with file upload
router.post(
  "/property/add_property",
  upload.single("image"), // Use Multer middleware to handle file upload
  PropertyController.add_property
);

// Route to get all properties
router.get("/property/get_all_property", PropertyController.get_property);

module.exports = router;
