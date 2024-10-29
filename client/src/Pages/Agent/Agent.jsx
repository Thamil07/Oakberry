import React, { useEffect, useState } from "react";
import "./Agent.css";
import Hero_Section from "../../Component/Hero_Section/Hero_Section";
import Agent_Card from "../../Component/Agent_Card/Agent_Card";
import axios from "axios";

const Agent = () => {
	const [agentdetails, setagentdetail] = useState([]);

	useEffect(() => {
		const fetchAgent = async () => {
			try {
				const response = await axios.get(
					"http://127.0.0.1:5555/api/auth/getagent"
				);
				console.log(response.data); // Log the data to verify its structur
				setagentdetail(response.data); // Set the data from the response
			} catch (err) {
				console.log("Error fetching agent details:", err.message);
			}
		};

		fetchAgent();
	}, []);

	return (
		<div className="parent_agent">
			<Hero_Section pagename="Our Agents" />
			<div className="home_agent_card_detail container">
				{agentdetails.map((agent_detail, index) => (
					<Agent_Card key={index} agent={agent_detail} />
				))}
			</div>
		</div>
	);
};

export default Agent;
