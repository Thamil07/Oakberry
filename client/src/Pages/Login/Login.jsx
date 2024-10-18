import React from "react";
import "./Login.css";
import Button from "../../Component/Button/Button";

function Login() {
	return (
		<div className="parent_login">
			<h1>Login to explore</h1>
			<div>
				<div>
					<label htmlFor="Email">Name</label>
					<input type="text" placeholder="Email"></input>
				</div>
				<div>
					<label htmlFor="Email">Name</label>
					<input type="text" placeholder="Email"></input>
				</div>
				<div>
					<Button text="Login" />
				</div>
			</div>
		</div>
	);
}

export default Login;
