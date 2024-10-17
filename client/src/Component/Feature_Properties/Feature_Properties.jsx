import React, { useEffect, useState } from "react";
import "./Feature_Properties.css";
import Properties from "../../Data/Properties.json";
import PropertyCard from "../Properties_card/PropertyCard";

function Feature_Properties() {
	const [properties, setproperties] = useState([]);

	useEffect(() => {
		setproperties(Properties.slice(0, 4));
	}, []);

	return (
		<div className="parent-feature">
			<p className="our">Our Properties</p>
			<h1>Featured Properties</h1>
			<div className="feature-properties container">
				{properties.map((property, index) => (
					<PropertyCard key={index} property={property} />
				))}
			</div>
		</div>
	);
}

export default Feature_Properties;
