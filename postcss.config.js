module.exports = {
  plugins: {
    "postcss-import": {},
      "postcss-flexbugs-fixes": {},
   
    tailwindcss: { config: "./tailwind.config.js" },
    autoprefixer: { flexbox: 'no-2009'},
    "postcss-preset-env": {
      features: { 'nesting-rules': true },
    },
    ...(process.env.NODE_ENV === "production" ? {} : {}),
  },
};
