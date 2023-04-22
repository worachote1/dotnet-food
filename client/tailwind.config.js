module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false,
  },
  variants: {},
  plugins: [
    require('daisyui'),
  ],
};