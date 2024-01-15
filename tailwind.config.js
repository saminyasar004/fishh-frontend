/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                background: "#0D0309",
                foreground: "#FCEEF7",
                primary: {
                    DEFAULT: "#BF3B93",
                    foreground: "#FCEEF7",
                },
                "primary-deep": {
                    DEFAULT: "#65244F",
                    foreground: "#FCEEF7",
                },
                "primary-light": {
                    DEFAULT: "#A823C8",
                    foreground: "#FCEEF7",
                },
                secondary: {
                    DEFAULT: "#2499BC",
                    foreground: "#FCEEF7",
                },
                tertiary: {
                    DEFAULT: "#6D6817",
                    foreground: "#FCEEF7",
                },
                destructive: {
                    DEFAULT: "#990000",
                    foreground: "#E6E4E5",
                },
                muted: {
                    DEFAULT: "#DDCDE4",
                    foreground: "#5D545A",
                },
                accent: {
                    DEFAULT: "#D2BCDB",
                    foreground: "#1A1819",
                },
                popover: {
                    DEFAULT: "#FFE5F6",
                    foreground: "#000",
                },
                card: {
                    DEFAULT: "#F2D8E9",
                    foreground: "#1A1819",
                },
                border: "#A5598C",
                input: "#3B2032",
                ring: "#BF3B93",
            },

            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
