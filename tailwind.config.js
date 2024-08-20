/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Playfair Display', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      screens: {
      
        'xs': '480px',  // Custom small screen breakpoint
        'xxs': '375px',  // Custom small screen breakpoint
        'sm': '640px',  // Tailwind's default small screen
        'md': '768px',  // Tailwind's default medium screen
        'lg': '1024px', // Tailwind's default large screen
        'xl': '1280px', // Tailwind's default extra-large screen
        '2xl': '1536px', // Tailwind's default 2xl screen
        'md-lg': '1023px',
        'lg-md': '1123px',
      },

      colors: {
        'custom-blue': '#312E81',
        'custom-purple': '#8468B1',
        'custombg':'white',
        'customText':'#ED2E66',

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to left, rgba(49, 46, 129, 1), rgba(132, 104, 177, 1))',
    },
  },
},
  plugins: [],
};
