const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "550px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#ef7d29",
        input: "#f0f0f0",
        black: "#000000",
        white: "#ffffff",
        orange: "#ff7f50", // Your custom orange color
        // Add other colors as needed
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        DEFAULT: "5px",
        large: "10px",
      },
      fontFamily: {
        exo2: ["Exo", "Roboto", "Arial", ...fontFamily.sans],
      },
      keyframes: {
        "neon-flashing": {
          '0%, 100%': { textShadow: '0 0 10px #ff7f50, 0 0 20px #ff7f50' },
          '50%': { textShadow: '0 0 20px #ff4500, 0 0 30px #ff4500' },
        },
        // Define other animations if needed
      },
      animation: {
        "neon-flashing": "neon-flashing 1.5s infinite",
        // Define other animations if needed
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Check if this plugin needs to be installed
    require("tailwindcss-safe-area"), // Check if this plugin needs to be installed
  ],
};
