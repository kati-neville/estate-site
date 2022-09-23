import { useEffect, useState } from "react";
import AOS from "aos";

const logo = require("../images/logo.png");

export const Navbar = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<nav
			style={{ boxShadow: "0px 10px 20px rgba(71, 100, 195, 0.1)" }}
			className="w-full bg-white fixed top-0 left-0 z-50">
			<div
				data-aos="zoom-in"
				data-aos-duration="2000"
				className="flex items-center justify-between w-[75%] mx-auto right-0 py-8 ">
				<div className="flex items-center justify-between w-[60%]">
					<div className="">
						<img src={logo} alt="" className="w-16 h-10" />
					</div>
					<div className="flex items-center space-x-8">
						<button className="font-sans  text-lg">Top offers</button>
						<button className="font-sans   text-lg">Search in offers</button>
						<button className="font-sans   text-lg">References</button>
						<button className="font-sans   text-lg">About us</button>
						<button className="font-sans   text-lg">Our team</button>
					</div>
				</div>
				<button className="bg-blue-900 text-white text-lg px-4 py-2 rounded-md">
					Contact us
				</button>
			</div>
		</nav>
	);
};
