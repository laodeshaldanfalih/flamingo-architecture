/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'ui-sans-serif'],
      'Outfit': ['Outfit', "sans-serif"],
      'playfair': ['Playfair Display', 'serif']
     },
     fontSize: {
      "display-xs": ['24px','32px'],
      "display-sm": ['30px', '40px'],
      "display-md": ['36px', '48px'],
      "display-lg": ['48px', '60px'],
      "display-xl": ['60px', '72px'],
      "display-2xl": ['72px','96px'],
      "body-xs": ['12px','16px'],
      "body-sm": ['14px','24px'],
      "body-md": ['16px','24px'],
      "body-lg": ['18px', '32px'],
      "body-xl": ['20px', '32px'],

    },
     colors: {
      "primary": "#996830",
      "white" : "#FFFFFF"
     }
  },
  plugins: [],
}