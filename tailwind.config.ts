import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3f7',
          100: '#d9e1eb',
          200: '#b3c3d7',
          300: '#8da5c3',
          400: '#6787af',
          500: '#41699b',
          600: '#34547c',
          700: '#1a2744',
          800: '#0a1628',
          900: '#060d17',
        },
        gold: {
          50: '#fdf9ed',
          100: '#f9efd1',
          200: '#f3dfa3',
          300: '#eccf75',
          400: '#d4af37',
          500: '#c8a55a',
          600: '#ab7f25',
          700: '#805f1c',
          800: '#554013',
          900: '#2b200a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200, 165, 90, 0.4)' },
          '50%': { boxShadow: '0 0 20px 10px rgba(200, 165, 90, 0)' },
        },
      },
      boxShadow: {
        'glow': '0 0 20px rgba(200, 165, 90, 0.3)',
        'glow-lg': '0 0 40px rgba(200, 165, 90, 0.4)',
      },
    },
  },
  plugins: [],
};

export default config;
