/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        oDarkBlue: "rgba(17, 25, 48, 0.5)",
        background: "rgba(17, 25, 40, 0.75)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
