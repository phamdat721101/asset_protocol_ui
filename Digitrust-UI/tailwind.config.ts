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
                cardMorePools: "0px 10px 60px 0px rgba(226, 236, 249, 0.50)",
                currency: "0px 1px 2px -1px rgba(17, 12, 34, 0.08)",
                elevation: "0px 2px 4px -2px rgba(17, 12, 34, 0.12)",
                chart: "0px 1px 4px 0px rgba(0, 0, 0, 0.10)"
            },

            backgroundImage: {
                details: "url('../public/assets/images/bg-details.png')",
            }
        },
    },
    plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
