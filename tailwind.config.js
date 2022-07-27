const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./dist/index.html'],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'gradient-radial': ' radial-gradient(100% 100% at 0% 0%,#114e4e 0%,#052d2d 59.9%,#041111 89.53%,#000909 100%)',
                'gradient-horizontal': 'linear-gradient(94.41deg, #00FFD1 0%, #27D7D7 52.17%, #3FE8FF 100%)',
                'gradient-button': 'linear-gradient(276.78deg, #016A6A 0%, #02A6A6 100%)',
            },
        },
    },
    plugins: [],
};