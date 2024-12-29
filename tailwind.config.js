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
  safelist: [
    'from-pink-500 to-purple-500',
    'from-blue-500 to-green-500',
    'from-yellow-500 to-orange-500',
    'from-red-500 to-purple-500',
    'from-indigo-500 to-blue-500',
    'from-green-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-sky-500',
    'from-sky-500 to-indigo-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-amber-500',
    'from-lime-500 to-green-500',
    'from-rose-500 to-pink-500',
    'from-emerald-500 to-lime-500',
    'from-fuchsia-500 to-violet-500',
    'from-slate-500 to-gray-500',
    'from-zinc-500 to-neutral-500',
    'from-stone-500 to-orange-700',
    'from-sky-600 to-purple-600',
    'from-blue-800 to-indigo-900',
  ],
  plugins: [],
};
