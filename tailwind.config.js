/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  lightMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/static/images/hero.png')",
        "bg-video-chat":
          "url('/static/images/woman-with-headset-video-call.png')",
      },
    },
  },
  plugins: [],
};
