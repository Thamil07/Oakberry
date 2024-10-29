const Property = require("../Models/Property_Model");
const Agent = require("../Models/Agent_Model");
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
			await Agent.findByIdAndUpdate(agentId, {
				$inc: { propertiesCount: 1 },
			});
			return res.status(201).json({ new_property });
		} catch (err) {
			console.error("Error adding property:", err.message); // Log the error for debugging
			return res.status(500).json({ Error: err.message });
		}
	}

	// Method to get all properties
	async get_property(req, res) {
		const query = req.query;

		// Remove empty values from the query
		const cleanQuery = Object.fromEntries(
			Object.entries(query).filter(([_, value]) => value)
		);

		console.log("Cleaned Query:", cleanQuery);

		try {
			// Initialize an empty filter object
			const filter = {};

			// Filter for 'type' directly if provided
			if (cleanQuery.type) {
				filter.type = cleanQuery.type;
			}

			// Case-insensitive and partial match for 'location'
			if (cleanQuery.location) {
				filter.location = { $regex: `^${cleanQuery.location}`, $options: "i" }; // Matches location starting with input (N/n)
			}

			// Handle 'price' with less than or equal to comparison
			if (cleanQuery.price) {
				filter.ogprice = { $lte: Number(cleanQuery.price) };
			}

			// Case-insensitive match for 'keyword'
			if (cleanQuery.keyword) {
				filter.property_name = { $regex: cleanQuery.keyword, $options: "i" }; // Matches anywhere in the property name, case-insensitive
			}

			// If no filters are present, retrieve all properties
			if (Object.keys(filter).length === 0) {
				const properties = await Property.find()
					.populate("property_agent", "name picture")
					.exec();
				return res.status(200).json(properties);
			} else {
				// Use the filter object to retrieve matching properties
				const filteredProperties = await Property.find(filter)
					.populate("property_agent", "name picture")
					.exec();
				console.log(filteredProperties)
				return res.status(200).json(filteredProperties);
			}
		} catch (err) {
			console.error("Error retrieving properties:", err.message);
			return res.status(500).json({ Error: err.message });
		}
	}
}

module.exports = Product_controller;
