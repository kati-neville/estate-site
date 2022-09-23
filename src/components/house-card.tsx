import React, { PropsWithChildren } from "react";
import { Spacer } from "./spacer";

export const HouseCard: React.FC<{
	image: string;
	description: string;
	amount: string;
	location: string;
}> = ({ image, description, amount, location }) => {
	return (
		<button
			style={{ boxShadow: "0px 8px 10px rgba(71, 100, 195, 0.1)" }}
			className="flex flex-col w-[350px] h-[420px] bg-white hover:scale-105 hover:duration-200 hover:ease-in-out transform">
			<div>
				<img src={image} alt="" height={260} width={350} />
			</div>

			<div className="px-3 text-left">
				<Spacer className="h-4" />

				<p className="font-merri text-heading text-lg font-bold">
					{description}
				</p>

				<Spacer className="h-4" />

				<p className="text-[#1C3988] font-sans font-medium">{amount}</p>

				<Spacer className="h-1" />

				<p className="font-extralight text-[#141B2D]">{location}</p>
			</div>
		</button>
	);
};
