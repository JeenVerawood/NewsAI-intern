/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",             // ไฟล์ใน app/
    "./app/Components/**/*.{js,ts,jsx,tsx}",   // ไฟล์ component ที่คุณสร้าง
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'spin-reverse': 'spin-reverse 1s linear infinite',
      },
    },
  },
  plugins: [],
}