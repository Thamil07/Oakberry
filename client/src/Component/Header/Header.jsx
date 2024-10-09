import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function Header() {
	return (
		<div>
			<header className="parent_header mx-auto">
				<div className="brand">
					<h1>Oakberry</h1>
					<p>REAL ESTATE AGENCY</p>
				</div>
				<div>
					<ul>
						<li>
							<Link>HOME</Link>
						</li>
						<li>
							<Link>ABOUT</Link>
						</li>
						<li>
							<Link>PROPERTIES</Link>
						</li>
						<li>
							<Link>AGENTS</Link>
						</li>
						<li>
							<Link>BLOG</Link>
						</li>
						<li>
							<Link>CONTACT</Link>
						</li>
					</ul>
				</div>
				<div>
					<Button text="Login" shape="round"/>
				</div>
			</header>
		</div>
	);
}

export default Header;
