// tailwind.config.js
module.exports = { // eslint-disable-line
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#E89DFF',
                secondary: '#B2E8FF',
                background: '#0D1D24'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}