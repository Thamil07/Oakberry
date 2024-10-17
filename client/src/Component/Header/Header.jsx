import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

function Header() {
	return (
		<div className="parent_head">
			<header className="parent_header mx-auto container-xxl">
				<div className="brand">
					<h1>Oakberry</h1>
					<p>REAL ESTATE AGENCY</p>
				</div>
				<div>
					<ul>
						<li>
							<NavLink to="/" activeClassName="active">
								HOME
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="active">
								ABOUT
							</NavLink>
						</li>
						<li>
							<NavLink to="/properties" activeClassName="active">
								PROPERTIES
							</NavLink>
						</li>
						<li>
							<NavLink to="/agent" activeClassName="active">
								AGENTS
							</NavLink>
						</li>
						<li>
							<NavLink to="/blog" activeClassName="active">
								BLOG
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" activeClassName="active">
								CONTACT
							</NavLink>
						</li>
					</ul>
				</div>
				<div>
					<NavLink to="/login">
						<Button text="Login" shape="round" />
					</NavLink>
				</div>
			</header>
		</div>
	);
}

export default Header;
