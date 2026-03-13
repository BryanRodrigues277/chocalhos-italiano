/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        'azul-primary': '#2196F3',
        'azul-gradient-start': '#2196F3',
        'azul-gradient-end': '#1976D2',
        'madeira-start': '#A67B5B',
        'madeira-end': '#6F4E37',
        'rosa-primary': '#FF69B4',
        'rosa-gradient-start': '#FFB6C1',
        'rosa-gradient-end': '#FF69B4',
        'bege-light': '#FAF7F4',
        'verde-cta': '#4CAF50',
        'verde-hover': '#45a049',
        'cinza-dark': '#333333',
        'cinza-medium': '#666666',
        'cinza-light': '#F5F5F5',
        'vermelho-urgencia': '#E74C3C',
        'amarelo-destaque': '#FFD700',
      },
    },
  },
  plugins: [],
};
