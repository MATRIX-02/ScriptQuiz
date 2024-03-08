const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {},
    fontFamily:{
      'mont':['Montserrat', 'sans-serif'],
      'montalt':['Montserrat Alternates', 'sans-serif'],
      'madurai':['Hind Madurai', 'sans-serif'],
    }
  },
  plugins: [addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}