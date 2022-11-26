module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        screen: {
          'xs': '425px'
        },
        spacing: {
          '150':'45rem',
          '128': '34rem',
          '120': '30em'
        }
      },
  
    },
    plugins: [],
  }