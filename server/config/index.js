const mongoose = require("mongoose");
require("dotenv").config();

exports.PORT = process.env.PORT;
exports.PUBLIC_KEY = process.env.PUBLIC_KEY;
exports.JWT_SECRET = process.env.JWT_SECRET;

exports.ConnectDB = async () => {
	try {
		const connect_db = await mongoose.connect(process.env.MONGO_URL, {
			dbName: "oakberry",
		});
		console.log("Database is successfully connected");
	} catch (err) {
		console.log(`Error Database is not connect properly ${err.message}`);
	}
};
