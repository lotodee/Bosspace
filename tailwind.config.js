/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_orange: "#FF823A",
        custom_blue: "#09153D",
        custom_blue_sec: "#4A6C92",
        custom_pink: "#EE1C47",
        custom_grey: "#676C7B",
        secondary: "#ff6b6b",
        customGray: "#f5f5f5",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #FF823A, #676C7B, #FFFFFF)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "work-sans", "sans-serif"], // Add Montserrat
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fadeIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
