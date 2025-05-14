// tailwind.config.js
const config = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    enabled: process.env.NODE_ENV === "production",
  };
  
  export default config; // Export the variable
  