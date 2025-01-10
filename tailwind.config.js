module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx}", // تمام فایل‌های جاوااسکریپت و تایپ‌اسکریپت در src
    "./src/components//*.{js,jsx}", // تمام فایل‌های در پوشه components
    "./src/pages//*.{js,jsx}", // تمام فایل‌های در پوشه pages
    "./src/index.css", // فایل CSS اصلی
  ],
  plugins: [],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 1.5s ease-in-out',
        'bounce-slow': 'bounce 3s infinite',
        'gradient-xy': 'gradientXY 6s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        gradientXY: {
          '0%, 100%': { backgroundPosition: 'top left' },
          '50%': { backgroundPosition: 'bottom right' },
        },
      },
    },
  },
};