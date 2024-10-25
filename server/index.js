const express = require("express");
const cors = require("cors");
const { ConnectDB, PORT } = require("./config/index");
const UserRouter = require("./Routers/Agent_Router");
const PropertyRouter = require("./Routers/Property_Router");
const path = require("path");

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Middleware for CORS to allow cross-origin requests
app.use(cors());

// Middleware to serve uploaded images
app.use("/uploads", express.static(path.join(__dirname, "Uploads")));

// Routes
app.use("/api/auth", UserRouter); // User-related routes
app.use("/api", PropertyRouter); // Property-related routes

// Connect to the Database
ConnectDB();

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
