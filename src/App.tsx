import { Navbar } from "./components/navbar";
import { Spacer } from "./components/spacer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { HouseCard } from "./components/house-card";
import { TeamCard } from "./components/team-card";
import { ScrollUp } from "./components/scroll-up";
const house = require("./images/header picture.jpg");
const house1 = require("./images/house1.png");
const house2 = require("./images/house2.png");
const about = require("./images/about.png");
const team1 = require("./images/team1.png");
const team2 = require("./images/team2.png");
const plane = require("./images/plane.png");

export function CarouselArrow({
	onClick,
	right,
}: PropsWithChildren<{
	onClick?: () => void;
	right?: boolean;
	className?: string;
}>) {
	return (
		<button
			onClick={onClick}
			className={`rounded-full shadow-xl text-white z-10 text-3xl -top-20 flex absolute items-center justify-center bg-[#1C3988] w-14 h-14 ${
				right ? "right-0 " : "right-16 rotate-180"
			}`}>
			<span>
				<svg
					width="13"
					height="22"
					viewBox="0 0 13 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.350515 1.89321L10.1225 10.999L0.349338 20.1047C-0.116446 20.5388 -0.116446 21.2411 0.349338 21.6752C0.815122 22.1083 1.56977 22.1083 2.03555 21.6752L12.6507 11.7847C13.1164 11.3517 13.1164 10.6483 12.6507 10.2153L2.03565 0.32478C1.56987 -0.108257 0.814044 -0.108257 0.34826 0.32478C-0.115269 0.75672 -0.115269 1.46018 0.350515 1.89321Z"
						fill="white"
					/>
				</svg>
			</span>
		</button>
	);
}

function App() {
	const textRef = useRef(null);

	const settings = {
		dots: true,
		infinite: true,
		slidesToScroll: 1,
		centerMode: true,
		slidesToShow: 3,
		//@ts-ignore
		appendDots: (dots: number) => {
			return <div className="bg-green-200 w-full">{dots}</div>;
		},
		customPaging: (dots: number) => {
			return <div className="w-full h-1 mt-4 bg-[#DADAEE]"></div>;
		},
		nextArrow: <CarouselArrow right />,
		prevArrow: <CarouselArrow />,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<div className="h-screen relative pt-12">
			<ScrollUp />
			<Navbar />

			<Spacer className="h-20" />

			<div className="w-[75%] mx-auto flex">
				<div className="flex flex-col items-start justify-center w-1/2">
					<div className="w-[85%]">
						<p
							data-aos="fade-up"
							data-aos-duration="2000"
							className="heading text-[65px] font-merri font-bold text-heading leading-[4.5rem] transform ">
							Modern living for everyone
						</p>

						<Spacer className="h-5" />

						<p
							data-aos="fade-up"
							data-aos-duration="3000"
							ref={textRef}
							className="font-sans text-lg text-[#091638]">
							We provide a complete service for the sale, purchase or rental of
							real estate. We have been operating in Madrid and Barcelona more
							than 15 years.
						</p>

						<Spacer className="h-5" />

						<div className="bg-[#F3F3FA] p-4 flex space-x-4 items-center justify-between">
							<div className="border border-[#DDDDDD] bg-white px-2 py-2 w-full space-x-2 rounded-sm flex items-center">
								{" "}
								<svg
									width="16"
									height="23"
									viewBox="0 0 16 23"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										opacity="0.35"
										d="M7.82089 0C3.50848 0 0 3.50848 0 7.82089C0 13.2411 7.82858 22.5 7.82858 22.5C7.82858 22.5 15.6418 12.9746 15.6418 7.82089C15.6418 3.50848 12.1334 0 7.82089 0ZM10.1806 10.1109C9.52995 10.7614 8.67549 11.0867 7.82089 11.0867C6.96643 11.0867 6.11169 10.7614 5.4613 10.1109C4.16011 8.8098 4.16011 6.69273 5.4613 5.39154C6.09137 4.7612 6.92949 4.41403 7.82089 4.41403C8.7123 4.41403 9.55028 4.76134 10.1806 5.39154C11.4818 6.69273 11.4818 8.8098 10.1806 10.1109Z"
										fill="#1C3988"
									/>
								</svg>
								<input
									type="text"
									name=""
									id=""
									placeholder="search for location"
									className="focus:outline-none w-full"
								/>
							</div>
							<button className="bg-blue-900 text-white text-lg px-4 py-2 flex items-center space-x-3 rounded-md">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M7.04604 0C3.16096 0 0 3.16096 0 7.04604C0 10.9313 3.16096 14.0921 7.04604 14.0921C10.9313 14.0921 14.0921 10.9313 14.0921 7.04604C14.0921 3.16096 10.9313 0 7.04604 0ZM7.04604 12.7913C3.87815 12.7913 1.30081 10.214 1.30081 7.04607C1.30081 3.87818 3.87815 1.30081 7.04604 1.30081C10.2139 1.30081 12.7913 3.87815 12.7913 7.04604C12.7913 10.2139 10.2139 12.7913 7.04604 12.7913Z"
										fill="white"
									/>
									<path
										d="M15.8095 14.8897L12.0805 11.1607C11.8264 10.9066 11.4149 10.9066 11.1608 11.1607C10.9067 11.4145 10.9067 11.8265 11.1608 12.0803L14.8898 15.8093C15.0168 15.9364 15.1831 15.9999 15.3496 15.9999C15.5159 15.9999 15.6824 15.9364 15.8095 15.8093C16.0636 15.5555 16.0636 15.1435 15.8095 14.8897Z"
										fill="white"
									/>
								</svg>
								<span>search</span>
							</button>
						</div>
					</div>
				</div>

				<div
					data-aos="fade-left"
					data-aos-duration="3000"
					className="w-1/2 flex justify-end">
					<img src={house} alt="" width={595} height={520} />
				</div>
			</div>

			<Spacer className="h-28" />

			<div className=" flex bg-[#F3F3FA]">
				<div className="w-[75%] mx-auto">
					<Spacer className="h-14" />

					<div className="flex items-end justify-between">
						<div className="flex flex-col space-y-4">
							<p
								data-aos="fade-up"
								data-aos-duration="2000"
								className="heading max-h-4text-heading text-5xl font-merri font-bold">
								Top Offers
							</p>

							<p
								data-aos="fade-up"
								data-aos-duration="3000"
								className="text-heading font-sans text-lg w-[60%]">
								Fulfill your career dreams, enjoy all the achievements of the
								city center and luxury housing to the fullest.
							</p>
						</div>

						<button className="text-[#1C3988] font-medium border-2 text-xs bg-white border-[#1C3988] rounded-md px-3 py-2">
							show all offers
						</button>
					</div>

					<Spacer className="h-14" />

					<div className="relative ">
						<Spacer className="h-14" />

						<div className="w-3/4 h-1 bg-[#DADAEE] rounded-lg absolute top-0">
							<div className="bg-[#1C3988] w-1/4 h-full"></div>
						</div>

						<div className="grid grid-cols-2 gap-2 lg:gap-4 w-full relative">
							<Slider className="col-span-3" {...settings}>
								<div className="w-full lg:pr-4 bg-transparent">
									<HouseCard
										image={house1}
										description="Large 4-room apartment with a beautiful terrace"
										amount="320 000€"
										location="Barcelona IX. "
									/>
								</div>
								<div className="w-full lg:pr-4 bg-transparent">
									<HouseCard
										image={house2}
										description="5i large design apartment with terrace"
										amount="280 000€"
										location="Madrid VI. "
									/>
								</div>
								<div className="w-full lg:pr-4 bg-transparent">
									<HouseCard
										image={house1}
										description="3-room apartment with a beautiful terrace"
										amount="450 000€"
										location="Madrid II. "
									/>
								</div>{" "}
								<div className="w-full lg:pr-4 bg-transparent">
									<HouseCard
										image={house1}
										description="Large 4-room apartment with a beautiful terrace"
										amount="320 000€"
										location="Barcelona IX. "
									/>
								</div>
								<div className="w-full lg:pr-4 bg-transparent">
									<HouseCard
										image={house2}
										description="5i large design apartment with terrace"
										amount="280 000€"
										location="Madrid VI. "
									/>
								</div>
							</Slider>
						</div>
					</div>

					<Spacer className="h-14" />
				</div>
			</div>

			<Spacer className="h-28" />

			<div className="w-[75%] mx-auto flex">
				<div
					data-aos="fade-right"
					data-aos-duration="3000"
					className="w-1/2 flex justify-start">
					<img src={about} alt="" width={595} height={520} />
				</div>

				<div className="flex flex-col items-end justify-center w-1/2">
					<div className="w-[85%]">
						<p
							data-aos="fade-up"
							data-aos-duration="2000"
							className="heading text-[65px] font-merri font-bold text-heading leading-[4.5rem] transform ">
							About us
						</p>

						<Spacer className="h-5" />

						<p
							data-aos="fade-up"
							data-aos-duration="3000"
							ref={textRef}
							className="font-sans text-lg text-[#091638] flex flex-col space-y-4">
							<span>
								{" "}
								We are a company that connects the world of real estate and
								finance. We provide a complete service for the sale, purchase or
								rental of real estate. Our advantage is more than 15 years of
								experience and soil in attractive locations in Slovakia with
								branches in Bratislava and Košice.
							</span>
							<span>
								{" "}
								We have a connection to all banks on the Slovak market, so we
								can solve everything under one roof. By constantly innovating
								our business activities, we move forward and we are able to
								offer truly above-standard services that set us apart from the
								competition.
							</span>
						</p>

						<Spacer className="h-5" />
					</div>
				</div>
			</div>

			<Spacer className="h-28" />

			<div className="w-[75%] mx-auto grid grid-cols-3 gap-4">
				<TeamCard img={team1} name="Davis Carder" job="Super duper position" />
				<TeamCard img={team2} name="Maren Press" job="Super duper position" />
				<div className="w-[350px] h-[378px] flex flex-col items-start justify-center space-y-4">
					<p className="text-5xl font-merri text-heading font-bold">Our Team</p>
					<p className="text-heading text-xl">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
						rutrum donec ultricies cras id ac.
					</p>
				</div>
				<TeamCard img={team1} name="Haylie Donin" job="Super duper position" />
				<TeamCard img={team2} name="Miracle Bator" job="Super duper position" />
				<TeamCard img={team1} name="Davis Carder" job="Super duper position" />
			</div>

			<Spacer className="h-28" />

			<div className="bg-[#F3F3FA]">
				<Spacer className="h-14" />

				<div className="w-[75%] mx-auto flex items-center justify-center ">
					<div className="w-1/4 ">
						<img src={plane} alt="" />
					</div>

					<div>
						<p className="text-heading text-3xl font-merri font-bold">
							Subscribe to newsletter
						</p>

						<Spacer className="h-3" />

						<p className="text-xl text-heading">
							Get the latest news and interesting offers and real estate
						</p>

						<Spacer className="h-3" />

						<div className="flex items-center space-x-3">
							<input
								type="text"
								name=""
								id=""
								placeholder="Your e-mail address"
								className="border border-[#DDDDDD] bg-white px-2 py-2 w-1/2 space-x-2 rounded-sm flex items-center"
							/>

							<button className="text-[#1C3988] font-medium border-2 text-xs bg-white border-[#1C3988] rounded-md px-3 py-2">
								subscribe
							</button>
						</div>
					</div>
				</div>

				<Spacer className="h-14" />
			</div>

			<div className="bg-[#1C3988] flex flex-col items-center justify-center">
				<Spacer className="h-14" />

				<svg
					width="57"
					height="36"
					viewBox="0 0 57 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M37.7861 0L28.5882 6.95606L19.3827 0L0.941162 13.9358V35.2941H11.644V30.6067H5.47134V16.323L19.3827 5.80989L24.738 9.85706L19.3369 13.9358V35.2941H26.6096H32.2246H37.8243V13.9358L32.4232 9.85706L37.7784 5.80989L51.6898 16.323V30.6067H45.0206V35.2941H56.2353V13.9358L37.7861 0ZM33.2941 16.323V30.6067H32.2322H26.6173H23.8747V16.323L28.5806 12.766L33.2941 16.323Z"
						fill="#F3F3FA"
					/>
				</svg>

				<p className="text-white text-xl">Real Estate</p>

				<Spacer className="h-14" />
			</div>
		</div>
	);
}

export default App;
