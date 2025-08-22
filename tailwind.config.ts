import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
   fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        // Elige una como default para body/text
        sans: ['Inter', 'Montserrat', 'Nunito Sans', 'sans-serif'],
      },
  
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(-10px)',
            backgroundColor: '#F4B400',
          },
          '100%': {
            transform: 'translateX(0)',
            backgroundColor: '#d9a720',
          },
        },
      },
      animation: {
        slideIn: 'slideIn 0.3s ease forwards',
      },
      boxShadow: {
        advancedHover: '0 4px 15px rgba(0, 0, 0, 0.3)',
      },
      transformOrigin: {
        'hover-scale': 'center',
      },
    },
  },
  plugins: [],
} satisfies Config;
