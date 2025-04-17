export default {
  plugins: {
    tailwindcss: { config: "./tailwind.config.mjs" }, // Explicitly point to config
    autoprefixer: {},
  },
  "postcss-purgecss": {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    safelist: {
      standard: [/^bg-/, /^text-/, /^border-/],
      deep: [/^\[--/],
    },
  },
};
