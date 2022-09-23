import React, { useEffect, useState } from "react";
const up = require("../images/down-arrow.png");

export const ScrollUp = () => {
	const [showBtn, setShowBtn] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 800) {
				setShowBtn(true);
				return;
			}
			setShowBtn(false);
		});

		// return window.removeEventListener("scroll", scrollFn);
	}, []);

	function scroll() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<div className="fixed bottom-9 right-9 rotate-180 z-30">
			{showBtn ? (
				<button onClick={scroll}>
					<img src={up} alt="" width={100} height={100} />
				</button>
			) : null}
		</div>
	);
};
