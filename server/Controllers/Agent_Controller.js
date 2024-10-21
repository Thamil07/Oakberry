const Agent = require("../Models/Agent_Model");
const bcrypt = require("bcrypt");

class Agent_Controller {
	async add_user(req, res) {
		const {
			agentid,
			name,
			username,
			password,
			propertiesCount,
			picture,
			socialMedia,
		} = req.body;

		// Field validation
		if (!agentid || !name || !username || !password) {
			return res
				.status(400)
				.json({ error: "Required fields: agentid, name, username, password" });
		}

		try {
			const hashedpassword = await bcrypt.hash(password, 10);

			// Create a new agent document
			const newAgent = await Agent.create({
				agentid,
				name,
				username,
				password: hashedpassword, // Ensure you hash this before saving
				propertiesCount: propertiesCount || 0, // Default to 0 if not provided
				picture:
					picture ||
					"https://cdn.pixabay.com/photo/2023/05/02/10/35/avatar-7964945_1280.png", // Default picture
				socialMedia: socialMedia || {}, // Default to an empty object
			});

			res
				.status(201)
				.json({ message: "Agent created successfully", agent: newAgent });
		} catch (err) {
			return res.status(500).json("User is not created");
		}
	}
	async Login(req, res) {
		const { username, password } = req.body;
		if (!username || !password) {
			return res
				.status(400)
				.json({ error: "Username and password is required" });
		}
		const agent = await Agent.findOne({ username });
		if (!agent) {
			return res.status(401).json({ error: "Invaild Credentials" });
		}
		const match = await bcrypt.compare(password, agent.password);
		if (!match) {
			return res.status(401).json({ error: "Invaild Credentials" });
		}
		// console.log(agentid)
        return res.status(200).json({message:'Login successfully', agentid:agent.agentid})
		
	}
}
module.exports = Agent_Controller;
