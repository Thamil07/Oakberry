import React from "react";
import Header from "../Header/Header";
import Carousel from "react-bootstrap/Carousel";
// Adjust the path accordingly
import { IoArrowForward } from "react-icons/io5";
import "./Slides.css"

function Slides() {
	return (
		<div>
			<Header />
			<Carousel controls={false} >
				<Carousel.Item>
					<img
						className="block"
						src="https://cdn.pixabay.com/photo/2024/07/12/22/26/ai-generated-8891135_1280.png"
						alt="First slide"
					/>
					<Carousel.Caption>
          <h2>Your Property Is Our Priority</h2>
						<p>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
						</p>
						<button>
							LEARN MORE <IoArrowForward />
						</button>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="block"
						src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="block"
						src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Slides;
