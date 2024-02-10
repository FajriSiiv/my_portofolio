/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: "Lexend",
        poppins: "Poppins",
      },
      gridTemplateColumns: {
        project: "repeat(auto-fill,minmax(350px,1fr))",
        linkMe: "repeat(auto-fill,minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
