module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.cjs" },
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  },
};
