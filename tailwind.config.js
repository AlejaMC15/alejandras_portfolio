/** tailwind.config.js */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#ffffff",
                foreground: "#171717",
                primary: "#9B4DFF",    // Morado suave (Opción A)
                secondary: "#1E3A8A",  // Azul marino
                accent: "#A7FF4D",     // Verde limón
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/images/background-one.jpg')",
            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out forwards',
                scaleIn: 'scaleIn 1s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.8)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
}
