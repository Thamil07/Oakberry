const mongoose = require("mongoose");

const Agent_schema = mongoose.Schema({
	agentid: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	username: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	propertiesCount: { type: Number, default: 0 },
	picture: {
		type: String,
		default:
			"https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png",
	},
	socialMedia: {
		twitter: { type: String },
		facebook: { type: String },
		gmail: { type: String },
		instagram: { type: String },
	},
});

const Agent = mongoose.model("Agent", Agent_schema);
module.exports = Agent;
