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
				primary: '#3AB0FF',
				'primary-variant': '#1089FF',
				secondary: '#FEB139',
				'secondary-variant': '#FD841F',
				accent: '#F9F9F9'
			}
		}
	},
	plugins: []
};
