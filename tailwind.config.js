module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}", // تمام فایل‌های جاوااسکریپت و تایپ‌اسکریپت در src
    "./src/components//*.{js,jsx}", // تمام فایل‌های در پوشه components
    "./src/pages//*.{js,jsx}", // تمام فایل‌های در پوشه pages
    "./src/index.css", // فایل CSS اصلی
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};