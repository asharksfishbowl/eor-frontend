/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prismai: {
          red: '#ff4c4c',
          lightRed: '#ff6666',
          purple: '#19022a',
        },
        resist: {
          blue: '#001f3f',
          cyan: '#00e0e0',
          green: '#00ff80',
          lightGreen: '#00e676',
        },
      },
      boxShadow: {
        prismai: '0 0 20px #ff4c4c, 0 0 30px #ff6666',
        resist: '0 0 20px #00e0e0, 0 0 30px #00ff80',
        neon: '0 0 20px #00e0e0, 0 0 30px #00FFFF',
      },
    },
  },
  plugins: [],
};
