/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			fontFamily: {
				merri: "Merriweather",
			},
			colors: {
				heading: "#091638",
			},
		},
	},
	plugins: [],
};
