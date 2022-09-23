import React, { useEffect } from "react";
import { Spacer } from "./spacer";
import AOS from "aos";

export const TeamCard: React.FC<{
	img: string;
	name: string;
	job: string;
}> = ({ job, img, name }) => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div
			data-aos="zoom-in"
			data-aos-duration="2000"
			style={{ boxShadow: "4px 0 20px rgba(71, 100, 195, 0.1)" }}
			className="w-[350px] h-[378px] flex flex-col items-center justify-center space-y-4 transform hover:scale-105 hover:duration-75">
			<img src={img} alt="" width={200} height={200} />

			<Spacer className="h-4" />

			<p className="text-heading font-merri font-bold text-xl">{name}</p>

			<p className="font-sans text-heading">{job}</p>
		</div>
	);
};
