/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundColor: {
                "indigo-1000": "rgb(36, 18, 106)",
                "blue-1000": "rgb(62, 128, 255)",
            },
            textColor: {
                "indigo-1000": "rgb(36, 18, 106)",
                "blue-1000": "rgb(62, 128, 255)",
            },
            boxShadow: {
                menu: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                bottom: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
            },
        },
    },
    plugins: [],
};
