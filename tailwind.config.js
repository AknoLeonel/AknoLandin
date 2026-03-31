/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'akno-dark': '#0a0a0f',
        'akno-primary': '#6366f1',
        'akno-glow': '#8b5cf6',
      },
    },
  },
  plugins: [],
}