import "./Button.css";
import React from "react";

function Button({ text, shape, className }) {
	const buttonclass = shape === "round" ? "round" : "square";
	return (
		<button className={`${className} ${buttonclass} button`}>{text}</button>
	);
}

export default Button;
