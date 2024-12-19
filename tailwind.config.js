/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        verySmall: "0.4rem",
      },
      scale: {
        102: "102%",
      },
      boxShadow: {
        day: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
      },
      colors: {
        "--theme-background-ultralight": "#effaff",
        "--theme-color-normal": "#8458b3",
        "--theme-background-light": "#e5eaf5",
        "--theme-color-dark": "#27272a", // bg-zinc-800
        // "--theme-background-ultralight-plus": "#dbeafe",
        // "--theme-background-normal": "#a0d2eb",
        // "--theme-color-light": "#d0bdf4",
      },
      animation: {
        up: "slide-up-fade-in 0.5s forwards ease-in-out",
        down: "slide-down-fade-in 0.5s forwards ease-in-out",
      },
      keyframes: {
        "slide-up-fade-in": {
          from: {
            opacity: 0,
            transform: "translateY(3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "slide-down-fade-in": {
          from: {
            opacity: 0,
            transform: "translateY(-3rem)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      screens: {
        "very-small-phones": "420px",
      },
    },
  },
  plugins: [],
};
