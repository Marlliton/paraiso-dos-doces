/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // yellow: {
        //   600: "#a18072", // EXEMPLO DE COMO FAZER //
        //   700: "#977669",
        // },
        pink: {
          500: "#EE69AC",
          600: "#CB4BCF"
        },
        black: {
          900: "#16161C",
          800: "#1A1A21"
        },
        white: {
          800: "#F9F9F9"
        }
      },

      backgroundImage: {
        "my-gradient": "linear-gradient(249.73deg, #F29682 0%, #EE69AC 50%, #CB4BCF 100%)",
      },
    },
  },
  plugins: [],
};
