/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray:{
          100:"#ebebeb",  //ebebeb 
          200:"#e6e9ed",
          600:"#95989c"
        },
        purple: {
          200: "#d3d8e9", // d9ddee
          500: "#9492db",
          600: "#645eb6", // 7164c0
        },
      },
    },
  },
  plugins: [],
};
