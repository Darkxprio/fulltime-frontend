/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "calc-vh-minus-123": "calc(100vh - 123px)",
        "calc-vh-minus-133": "calc(100vh - 133px)",
        "calc-vh-minus-136": "calc(100vh - 136px)",
      },
    },
  },
  plugins: [],
};
