module.exports = {
	content: [
		'./components/**/*.{html,js,ts,tsx}',
		'./pages/**/*.{html,js,ts,tsx}',
		'.public/index.html',
		'./src/pages/**/*.{html,js,ts,tsx}',
		'./src/components/**/*.{html,js,ts,tsx}',
		'./src/layouts/**/*.{html,js,ts,tsx}',
		'./src/index.html',
	],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
}
