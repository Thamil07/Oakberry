import React, { useEffect, useState } from "react";
import "./Signup.css";
import "../Login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Component/Button/Button";
import axios from "axios";

function Register() {
	const navigate = useNavigate();
	const [agentid, setAgentId] = useState("");
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [con_password, setConPassword] = useState("");
	const [success, setSuccess] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const storedAgentId = localStorage.getItem("agentid");
		if (storedAgentId) {
			navigate("/");
		}
	}, [navigate]);

	const agentidChange = (e) => setAgentId(e.target.value);
	const nameChange = (e) => setName(e.target.value);
	const usernameChange = (e) => setUsername(e.target.value);
	const passwordChange = (e) => setPassword(e.target.value);
	const con_passwordChange = (e) => setConPassword(e.target.value);

	const handlesignup = async () => {
		if (password !== con_password) {
			setError("Passwords do not match.");
			return;
		}

		setLoading(true);
		setError(null);
		setSuccess(null);

		try {
			const response = await axios.post(
				"http://127.0.0.1:5555/api/auth/add_user", // Updated endpoint to register
				{ agentid, name, username, password, }
			);
			setSuccess(response.data.message);
		} catch (err) {
			console.log(`Error uploading the User Details`, err);
			setError(err.response ? err.response.data.error : "Server error");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="parent_register">
			<div className="signup_content">
				<h1>
					<i className="fa-solid fa-cash-register fa-bounce"></i>
					<p>Join Our Club</p>
				</h1>
				<div className="all_details_signup">
					<div className="signup_input">
						<input
							type="text"
							id="agentid"
							placeholder=""
							required
							value={agentid}
							onChange={agentidChange}
						/>
						<label htmlFor="agentid">Agent ID</label>
					</div>
					<div className="signup_input">
						<input
							type="text"
							id="name"
							placeholder=" "
							required
							value={name}
							onChange={nameChange}
						/>
						<label htmlFor="name">Name</label>
					</div>
					<div className="signup_input">
						<input
							type="text"
							id="username"
							placeholder=" "
							required
							value={username}
							onChange={usernameChange}
						/>
						<label htmlFor="username">Username</label>
					</div>

					<div className="signup_input">
						<input
							type="password"
							id="password"
							placeholder=" "
							required
							value={password}
							onChange={passwordChange}
						/>
						<label htmlFor="password">Password</label>
					</div>
					<div className="signup_input">
						<input
							type="password"
							id="con_password"
							placeholder=" "
							required
							value={con_password}
							onChange={con_passwordChange}
						/>
						<label htmlFor="con_password">Confirm Password</label>
					</div>
					<div className="signup_bt">
						<Button
							onClick={handlesignup}
							text={loading ? "Signing Up..." : "Signup"}
							disabled={loading}
						/>
					</div>
					<p>
						If you have an account <Link to="/login">Click Here</Link>
					</p>
					<div>
						{error && <div style={{ color: "red" }}>{error}</div>}
						{success && <div style={{ color: "green" }}>{success}</div>}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;
