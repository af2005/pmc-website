const colors = require('tailwindcss/colors')


module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            current: '#FF0000',
            DEFAULT: '#3C6E71',
            ming: '#3C6E71',
            yellow: colors.yellow,
            'tahiti': {
                light: '#67e8f9',
                DEFAULT: '#06b6d4',
                dark: '#0e7490',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],

}
