/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                shark: {
                    50: "#f4f4f5",
                    100: "#eaeaea",
                    200: "#cacacb",
                    300: "#a9a9ac",
                    400: "#69696e",
                    500: "#292930",
                    600: "#25252b",
                    700: "#1f1f24",
                    800: "#19191d",
                    900: "#141418",
                },
                manatee: {
                    50: "#f9f9fa",
                    100: "#f3f4f6",
                    200: "#e2e3e8",
                    300: "#d0d3da",
                    400: "#adb1be",
                    500: "#8a90a2",
                    600: "#7c8292",
                    700: "#686c7a",
                    800: "#535661",
                    900: "#44474f",
                },
                apache: {
                    50: "#fdfcf8",
                    100: "#fcf9f1",
                    200: "#f7f0dd",
                    300: "#f3e6c8",
                    400: "#e9d49e",
                    500: "#e0c175",
                    600: "#caae69",
                    700: "#a89158",
                    800: "#867446",
                    900: "#6e5f39",
                },
            },
            fontFamily: {
                DMSans: "'DM Sans ,sans-serif",
            },
        },
    },
    plugins: [],
};
