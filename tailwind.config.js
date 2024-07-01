/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'Gorditas': ['Gorditas'],
        'mons': ['Montserrat', 'sans-serif'],
        'outfit': ['Outfit'],
        'pop': ['Poppins', 'sans-serif'],
        'nu': ['Nunito Sans'],
        'int': ['Inter', 'sans-serif'],
        'Merri-sans': ['Merriweather-sans', 'sans-serif'],
        'mrisan': ['Merriweather-sans'],
        'Merri': ['Merriweather', 'serif']

      },
    },
    screens: {
      'xsm': { 'min': '320px', 'max': '519px' },
      'sm': { 'min': '520px', 'max': '720px' },
      'md': { 'min': '721px', 'max': '1024px' },
      'lg': { 'min': '1025px', 'max': '1599px' },
      'xl': { 'min': '1600px', 'max': '1999px' },
      '2xl': { 'min': '2000px' },
    },
  },
  plugins: [],
};
