/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background_primary: "#3e00ce",
        background_secondary: "#ffffff",
        logo_color_large: "#e5e3fa",
        logo_color_small: "#3e00ce",
        text_Specialty: "#8f8f8f",
      },
      padding: {
        padding_primary: "2rem",
      },
      width: {
        contact_width: "20vw",
        profile_width: "20vw",
        Profile_detail_width: "60vw",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Montserrat", "sans-serif"],
        Specialty: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
