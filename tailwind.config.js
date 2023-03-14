/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "thinYellow":"#FFC801",
        "secondary1":"#385A64",
        "secondary2":"#2C444E",
        "thinWhite":"#F0F0F0",
        "gray2":"#A7A7A7"
      },
      fonts:{
        "mainFont": 'Poppins', 
      }
    },
  },
  plugins: [],
}
