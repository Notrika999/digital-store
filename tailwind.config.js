/** @type {import('tailwindcss').Config} */
import tailwindcssRtl from 'tailwindcss-rtl';

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssRtl,
  ],

  extend: {
    colors: {
      customColor: "#ff0000",
    },
  },
};
