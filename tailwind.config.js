/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media', // o 'class' si prefieres control manual
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    safelist: [
        'shadow-navbar-light',
        'dark:shadow-navbar-dark',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                heading: 'var(--heading-color)',
                subtext: 'var(--subtext-color)',
                accent: 'var(--accent-color)',
                success: 'var(--success-color)',
                error: 'var(--error-color)',
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
