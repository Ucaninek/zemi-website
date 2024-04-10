// tailwind.config.js
module.exports = { // eslint-disable-line
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#CD28FF',
                secondary: '#37C3FF',
                background: '#0D1D24'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}