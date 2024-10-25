const Property = require("../Models/Property_Model");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/index");

class Product_controller {
	// Method to add a property
	async add_property(req, res) {
		try {
			console.log("Received request body:", req.body);

			// Destructure required fields from req.body
			const {
				property_agent,
				propertyname,
				ogprice,
				offprice,
				location,
				type,
				bdroom,
				bhroom,
				size,
			} = req.body;

			// Verify property_agent token
			const decodedAgent = jwt.verify(property_agent, JWT_SECRET);
			const agentId = decodedAgent.id;
			console.log(agentId); // Extract agent ID from decoded token

			// Construct the image URL from the request
			const image = `${req.protocol}://${req.get("host")}/uploads/${
				req.file.filename
			}`;

			// Check for required fields
			if (
				!agentId ||
				!propertyname ||
				!image ||
				!ogprice ||
				!location ||
				!type ||
				!bdroom ||
				!bhroom ||
				!size
			) {
				return res
					.status(400)
					.json({ Error: "Kindly fill all required fields." });
			}

			// Create a new property in the database
			const new_property = await Property.create({
				property_agent: agentId, // Use the verified agent ID
				propertyname,
				ogprice,
				offprice,
				location,
				type,
				bdroom,
				bhroom,
				size,
				image,
			});

			return res.status(201).json({ new_property });
		} catch (err) {
			console.error("Error adding property:", err.message); // Log the error for debugging
			return res.status(500).json({ Error: err.message });
		}
	}

	// Method to get all properties
	async get_property(req, res) {

		const query=req.query;

		{
			type:{$eq:"rent"}
		}

		filter = {};

		
		console.log(query)
		try {
			const properties = await Property.find()
				.populate("property_agent", "name picture")
				.exec();
			return res.status(200).json(properties);
		} catch (err) {
			return res.status(500).json({ Error: err.message });
		}
	}
}

module.exports = Product_controller;
