import React from "react";
import "./About.css";

function About() {
	return (
		<div className="about_parent container">
			<div className="about_img_a"><img src="https://preview.colorlib.com/theme/oakberry/images/about.jpg" alt="" /></div>
			<div className="about_content container">
				<h4>ABOUT US</h4>
				<h1>Oakberry A Real Estate Company</h1>
				<p>
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts. Separated they
					live in Bookmarksgrove right at the coast of the Semantics, a large
					language ocean.
				</p>
				<div className="about_data">
					<div>
						<h2>50</h2>
						<p>Years of Experienced</p>
					</div>
					<div>
						<h2>210K+</h2>
						<p>Total Properties</p>
					</div>
					<div>
						<h2>450</h2>
						<p>Qualified Realtors</p>
					</div>
					<div>
						<h2>100</h2>
						<p>Total Branches</p>
					</div>
				</div>
				<div className="about_img_b">
                    <img src="https://preview.colorlib.com/theme/oakberry/images/about-1.jpg" alt="" />
                </div>
			</div>
		</div>
	);
}

export default About;
