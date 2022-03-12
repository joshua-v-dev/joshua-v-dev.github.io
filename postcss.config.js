module.exports = {
  plugins: {
    "postcss-import": {},
    
    tailwindcss: { config: "./tailwind.config.js" },
    autoprefixer: {},
    "postcss-preset-env": {
      features: { 'nesting-rules': true },
    },
    ...(process.env.NODE_ENV === "production" ? {} : {}),
  },
};
