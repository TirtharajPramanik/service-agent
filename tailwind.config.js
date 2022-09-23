/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				default: '#1e1e1e',
				secondary: '#FEB139',
				'secondary-variant': '#FD841F',
				accent: '#F9F9F9'
			}
		}
	},
	plugins: []
};
