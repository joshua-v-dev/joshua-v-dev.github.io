module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{html,js,ts,tsx}',
    './pages/**/*.{html,js,ts,tsx}',
    '.public/index.html',
    './src/pages/**/*.{html,js,ts,tsx}',
    './src/components/**/*.{html,js,ts,tsx}',
    './src/layouts/**/*.{html,js,ts,tsx}',
    './src/index.html',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('tw-elements/dist/plugin'),
  ],
};
