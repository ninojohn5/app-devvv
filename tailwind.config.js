/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // Ensure all content paths are declared here
  theme: {
    extend: {
      screens: {
        'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
      }
    }, // You can extend the default Tailwind theme here
  },
  plugins: [
  ], // Add Tailwind plugins here if needed
};
