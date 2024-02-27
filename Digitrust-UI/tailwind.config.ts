import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            container: {
                padding: {
                    DEFAULT: "2rem",
                    sm: "0.5rem",
                    md: "5rem"
                },
            },

            colors: {
                "blue-50": "#EFF6FF",
                "gray-45": "#C3D4E9",
            },

            fontFamily: {
                primary: "Poppins",
            },

            fontSize: {
                heading: "50px",
            },

            borderRadius: {
                primary: "10px",
                second: "20px",
            },

            boxShadow: {
                primary: "0px 20px 95px 0px rgba(201, 203, 204, 0.30)",
            },
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
