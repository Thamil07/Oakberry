import React, { useEffect, useState } from "react";
import "./Feature_Properties.css";
import moment from "moment";
import Properties from "../../Data/Properties.json";
import { MdOutlineBedroomChild } from "react-icons/md";
import { PiToilet } from "react-icons/pi";
import { FaHouseDamage } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

function Feature_Properties() {
	const [properties, setproperties] = useState();

	useEffect(() => {
		setproperties(Properties.slice(0, 4));
	}, []);
	return (
		<div className="parent-feature">
			<p className="our">Our Properties</p>
			<h1>Featured Properties</h1>
			<div className="feature-properties container">
				{Properties.slice(0, 4).map((property, index) => (
					<div key={index} className="feature-property-card">
						<div className="property_img">
							<img src={property.image} alt={property.location}></img>
							<div className="price_list">
								{property.offprice ? (
									<>
										<span className="ogprice-dimm">
											${property.ogprice.toLocaleString()}
										</span>
										<span className="offprice">
											${property.offprice.toLocaleString()}
										</span>
									</>
								) : (
									<>
										<span className="ogprice">
											${property.ogprice.toLocaleString()}
										</span>
									</>
								)}
							</div>
						</div>
						<div className="all_details">
							<div className="details_top">
								<div className="agent_details">
									<img src={property.agpic} alt={property.name} />
									<p>{property.name}</p>
								</div>
								<p className="date">{moment(property.date).fromNow()}</p>
							</div>
							<div className="all_property_details">
								<div className="property_details">
									<p className="pname">{property.property_name}</p>
									<div className="plocation">
										<p>
											<span>
												<MdLocationPin />
											</span>
											{property.location}
										</p>
										<p className={property.type === "Sale" ? "sale" : "rent"}>
											{property.type}
										</p>
									</div>
								</div>
								<div className="property_size">
									<div className="icons">
										<MdOutlineBedroomChild />

										<p>{property.bdroom}</p>
									</div>
									<div className="icons">
										<PiToilet />
										<p>{property.bhroom}</p>
									</div>
									<div className="icons">
										<FaHouseDamage />

										<p>{property.size.toLocaleString()}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Feature_Properties;
