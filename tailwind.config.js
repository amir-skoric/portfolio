/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#FF9C40',
        'secondary': 'rgb(0, 114, 163)'
      },
      screens: {
        xl: { max: "3000px" },
        lg: { max: "1030px" },
        md: { max: "800px" },
        sm: { max: "666px" },
        xsm: { max: "399px"}
      }
    },
}
}
