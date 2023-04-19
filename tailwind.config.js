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
                "blue-ribbon": {
                    50: "#f7f7fe",
                    100: "#eeeefd",
                    200: "#d5d5fa",
                    300: "#bcbbf6",
                    400: "#8a89f0",
                    500: "#5856e9",
                    550: "#5956E9",
                    600: "#4f4dd2",
                    700: "#4241af",
                    800: "#35348c",
                    900: "#2b2a72",
                },
                abbey: {
                    50: "#f6f6f7",
                    100: "#eeeeef",
                    200: "#d4d4d6",
                    300: "#bbbbbd",
                    400: "#87878c",
                    500: "#54545b",
                    600: "#4c4c52",
                    700: "#3f3f44",
                    800: "#323237",
                    900: "#29292d",
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
                "cornflower-lilac": {
                    50: "#fffbfb",
                    100: "#fff7f7",
                    200: "#ffebeb",
                    300: "#ffdede",
                    400: "#ffc6c6",
                    500: "#ffadad",
                    600: "#e69c9c",
                    700: "#bf8282",
                    800: "#996868",
                    900: "#7d5555",
                },
                portage: {
                    50: "#fbfbff",
                    100: "#f6f7ff",
                    200: "#e9eaff",
                    300: "#dcddff",
                    400: "#c2c4ff",
                    500: "#a8abff",
                    600: "#979ae6",
                    700: "#7e80bf",
                    800: "#656799",
                    900: "#52547d",
                },
                "ship-gray": {
                    50: "#f5f5f6",
                    100: "#ebebec",
                    200: "#ceced0",
                    300: "#b0b0b3",
                    400: "#75757b",
                    500: "#3a3a42",
                    600: "#34343b",
                    700: "#2c2c32",
                    800: "#232328",
                    900: "#1c1c20",
                },
                gray: {
                    50: "#f9f9f9",
                    100: "#f2f2f2",
                    200: "#dfdfdf",
                    300: "#cbcbcb",
                    400: "#a5a5a5",
                    500: "#7e7e7e",
                    600: "#717171",
                    700: "#5f5f5f",
                    800: "#4c4c4c",
                    900: "#3e3e3e",
                },
                "dark-blue": {
                    50: "#f5f4fe",
                    100: "#eaeafd",
                    200: "#cbcafa",
                    300: "#abaaf7",
                    400: "#6d6af1",
                    500: "#2e2aeb",
                    600: "#2926d4",
                    700: "#2320b0",
                    800: "#1c198d",
                    900: "#171573",
                },
                concord: {
                    50: "#f8f8f8",
                    100: "#f2f2f2",
                    200: "#dedede",
                    300: "#cbcbcb",
                    400: "#a3a3a3",
                    500: "#7c7c7c",
                    600: "#707070",
                    700: "#5d5d5d",
                    800: "#4a4a4a",
                    900: "#3d3d3d",
                },
            },
            fontFamily: {
                DMSans: "DM Sans ,sans-serif",
            },
            screens: {
                "3xl": "2024px",
                xs: "500px",
            },
            lineHeight: {
                26: "26px",
                64: "64px",
            },
            fontSize: {
                "10xl": "28px",
            },
            letterSpacing: {
                tightest: "-0.72px",
                tight: "-1.5px",
            },
            borderRadius: {
                20: "20px",
            },
            margin: {
                290: "290px",
                320: "320px",
                120: "120px",
                130: "130px",
                140: "140px",
                90: "90px",
                60: "60px",
            },
            padding: {
                120: "120px",
                140: "140px",
                60: "60px",
                7.5: "30px",
                45: "45px",
                25: "25px",
                55: "55px",
                35: "35px",
                130: "130px",
                100: "100px",
            },
            fontSize: {
                "10xl": "85px",
                "15xl": "125px",
                "12xl": "28px",
                "16xl": "50px",
                "17xl": "60px",
            },
            zIndex: {
                1: "1",
            },
            lineHeight: {
                22: "22px",
                72: "72px",
                30: "30px",
                70: "70px",
                6.5: "26px",
                138: "138px",
                35: "35px",
                50: "50px",
                26: "26px",
                45: "45px",
                58: "58px",
            },
            borderRadius: {
                10: "10px",
                20: "20px",
                35: "35px",
                5: "5px",
            },
            space: {
                25: "100px",
                0.9: "3.5px",
                13: "13px",
            },
            borderWidth: {
                0.5: "3px",
            },
            inset: {
                90: "90px",
                70: "70px",
                160: "160px",
                8.5: "35px",
                65: "65px",
                120: "120px",
                250: "250px",
                72: "72px",
                80: "80px",
                7.5: "30px",
                15: "15px",
                290: "290px",
                320: "320px",
            },
            gap: {
                7.5: "30px",
            },
            width: {
                9.5: "38px",
            },
            height: {
                9.5: "38px",
            },
            gridColumnStart: {
                2: "2",
            },
            gridColumnEnd: {
                "2x": "2",
            },
        },
    },
    plugins: [],
};
