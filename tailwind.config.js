module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:'#5da88a'
      }
    },
  },
  plugins: [require("daisyui")],
}
