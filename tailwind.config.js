module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor:['bg']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
