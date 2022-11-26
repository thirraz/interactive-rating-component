/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.jsx"],
	theme: {
		extend: {
			backgroundColor: {
				darkBg: "#141519",
				fromBg: "#171E27",
				toBg: "#232A34",
				orangeColor: "#fc7512",
				buttonColor: "#262F38",
				lGray: "#7C8797",
			},

			textColor: {
				orangeColor: "#fc7512",
			},

			fontFamily: {
				overPass: '"Overpass", sans-serif',
			},
		},
	},
	plugins: [],
};
