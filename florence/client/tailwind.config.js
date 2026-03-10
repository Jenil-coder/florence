/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                navy: '#0B1F3A',
                gold: '#C9A84C',
                'gold-light': '#E8C96D',
                'gold-dark': '#A8873A',
            },
            fontFamily: {
                display: ['"Cormorant Garamond"', 'serif'],
                sans: ['"DM Sans"', 'sans-serif'],
                mono: ['"DM Mono"', 'monospace'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'draw': 'draw 1.5s ease-out forwards',
                'bounce-slow': 'bounce 2s infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
