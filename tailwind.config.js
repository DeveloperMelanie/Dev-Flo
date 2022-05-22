module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './icons/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            padding: '1rem',
            center: true,
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1200px',
                '2xl': '1200px',
            },
        },
        extend: {},
    },
    darkMode: 'class',
    plugins: [],
}
