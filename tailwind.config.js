/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				primary: "#2a69ac",       // Deep Blue
				secondary: "#5e4c7b",     // Purple
				tertiary: "#af65a1",      // Lavender
				quaternary: "#336699",    // Royal Blue
				five: "#c1a5c1",          // Pale Lavender

				bgPrimaryLight: "#f8f8f8", // Light Gray
				bgSecondaryLight: "#e0eaf0", // Light Blue-Gray
				ctnPrimaryLight: "#394956", // Dark Slate Gray
				ctnSecondaryLight: "#9caab4", // Slate Gray

				ctnPrimaryDark: "#333333", // Dark Gray
				ctnSecondaryDark: "#6c7b8b", // Blue-Gray

				black100: "#100d25",       // Dark Indigo
				black200: "#090325",       // Dark Purple
				white100: "#f3f3f3"        // Light Gray
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35"
			},
			backgroundImage: {
				"hero-pattern": "url('/assets/herobg.png')",
				bgPrimaryDark:
					"linear-gradient(90deg, rgba(24,24,38,1) 0%, rgba(32,32,50,1) 50%, rgba(24,24,38,1) 100%)",
				bgSecondaryDark:
					"linear-gradient(90deg, rgba(33,33,52,1) 0%, rgba(39,39,61,1) 50%, rgba(33,33,52,1) 100%)"
			},
			screens: {
				xs: "320px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px"
			}
		}
	},
	plugins: []
};
