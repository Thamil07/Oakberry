import React from "react";
import "./Filter.css";
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../Button/Button";

function Filter() {
	return (
		<div className="filter ">
			<div className="bt">
				<Button text={"Buy Properties"} />
				<Button text={"Rent Properties"} />
			</div>
			<div className="searchbar container">
				<div className="option">
					<p className="mb-0">Enter Keyword</p>
					<div>
						<CiSearch />
						<input placeholder="Enter Keyword"></input>
					</div>
				</div>
				<div className="option">
					<p className="mb-0">Property Type</p>
					<div>
						<FaAngleDown />
						<input placeholder="Enter Keyword"></input>
					</div>
				</div>
				<div className="option">
					<p className="mb-0">Location</p>
					<div>
						<IoLocationOutline />
						<input placeholder="Enter Keyword"></input>
					</div>
				</div>
				<div className="option">
					<p className="mb-0">Price Limit</p>
					<div>
						<FaAngleDown />
						<input placeholder="Enter Keyword"></input>
					</div>
				</div>
				<div className="option Search">
					<p className="mb-0"> SEARCH</p>
				</div>
			</div>
		</div>
	);
}

export default Filter;
