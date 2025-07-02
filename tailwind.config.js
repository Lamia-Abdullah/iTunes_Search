/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular"],
      },
      colors: {
        background: {
          DEFAULT: "#0e0f1c", //Main page background
          card: "#1c1d2e", //Cards background
          input: "#1a1b2d", //Input fields background
          hover: "#292a3d",
        },
        primary: {
          DEFAULT: "#8b5cf6", // purple-500
          600: "#9333ea", // purple-600
          400: "#a855f7", // purple-400
        },
        secondary: {
          100: "#f5f5f5",
          200: "#e5e7eb",
          300: "#d1d5db",
          DEFAULT: "#9ca3af", //  Default secondary (Gray 400)
          600: "#4b5563",
        },
        //Divider and Borders
        divider: "#2c2d3c",
      },
    },
  },

  plugins: [],
};
