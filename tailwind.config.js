/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    wirefire: [
      {
        medic_world_theme: {
          primary: "#0FCFEC",

          secondary: "#3A4256",

          accent: "#19D3AE",

          neutral: "#1C1528",

          "base-100": "#E6E1EA",

          info: "#9BB8F3",

          success: "#1C9255",

          warning: "#B98F04",

          error: "#E75575",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: "#0FCFEC",
        secondary: "#3A4256",
        accent: "#19D3AE",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
