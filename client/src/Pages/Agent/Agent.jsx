import React from "react";
import "./Agent.css";
import Hero_Section from "../../Component/Hero_Section/Hero_Section";
import Agent_Card from "../../Component/Agent_Card/Agent_Card";
import userdetails from "../../Data/User_details.json";

function Agent() {
	return (
		<div className="parent_agent">
			<Hero_Section pagename="Our Agents" />
			<div className="home_agent_card_detail container">
				{userdetails.map((userdetail, index) => (
					<Agent_Card key={index} agent={userdetail} />
				))}
			</div>
		</div>
	);
}

export default Agent;
