import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header/Header";
import Home from "./Pages/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import About_Page from "./Pages/About_Page/About_Page";

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1500, // Animation duration in milliseconds
			offset: 100,
		});
	}, []);
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About_Page/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
