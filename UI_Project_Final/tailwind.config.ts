import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                socialLink: "#2563EB",
                card: "#C3D4E9",
            },

            borderColor: {
                card: "1.611px solid #C3D4E9",
            },

            borderRadius: {
                timelineLeft: "999px 0px 0px 999px",
                timelineRight: "0px 999px 999px 0px",
            },

            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },

            boxShadow: {
                card: "0px 20px 95px 0px rgba(201, 203, 204, 0.30)",
            },

            fontSize: {
                primary: "28.24px",
            },
            fontFamily: {
                primary: "Poppins",
                second: "Manrope",
            },
        },
    },
    plugins: [],
};
export default config;
