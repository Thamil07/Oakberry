import React from "react";
import Slides from "../../Component/slides/Slides";
import Button from "../../Component/Button/Button";
import "./Home.css";
import { CiSearch } from "react-icons/ci";
import { FaLandmark, FaAngleDown } from "react-icons/fa6";
import { HiHomeModern, HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaIndustrySolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import Feature_Properties from "../../Component/Feature_Properties/Feature_Properties";

function Home() {
	const size = "3rem";
	return (
		<div className="parent-home">
			<div className="hero-section">
				<Slides />
				<div className="filter ">
					<div className="bt">
						<Button text={"Buy Properties"} />
						<Button text={"Rent Properties"} />
					</div>
					<div className="searchbar">
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
				</div>
				<div className="categories">
					<div className="categories-section">
						<div data-aos="fade-up" className="head1">
							<p style={{ textTransform: "uppercase" }}>Oakberry Categories</p>
							<h2>Explore Our Categories & Places</h2>
						</div>
						<div className="categories-cards container">
							<div className="categories-option">
								<div
									data-aos="fade-up"
									data-aos-duration="500"
									className="categories-list">
									<FaLandmark size={size} />
									<p>Land</p>
								</div>
								<div
									data-aos="fade-up"
									data-aos-duration="1000"
									className="categories-list">
									<HiHomeModern size={size} />
									<p>Residential</p>
								</div>
								<div
									data-aos="fade-up"
									data-aos-duration="1500"
									className="categories-list">
									<HiOutlineBuildingOffice2 size={size} />
									<p>Commercial</p>
								</div>
								<div
									data-aos="fade-up"
									data-aos-duration="2000"
									className="categories-list">
									<LiaIndustrySolid size={size} />
									<p>Industrial</p>
								</div>
							</div>
							<div className="categories-city">
								<ul data-aos="fade-up" data-aos-duration="1000">
									<li>
										<b>New York</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>China</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>India</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>London</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
								</ul>
								<ul data-aos="fade-up" data-aos-duration="1500">
									<li>
										<b>New York</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>China</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>India</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>London</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
								</ul>
								<ul data-aos="fade-up" data-aos-duration="2000">
									<li>
										<b>New York</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>China</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>India</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
									<li>
										<b>London</b>
										<p>200 Properties</p>
										<hr></hr>
									</li>
								</ul>
							</div>
					</div>
				</div>
			</div>
			<Feature_Properties/>
		</div>
	);
}

export default Home;
