/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      yellow: "#FCD139",
      bg: "#000000",
      white: "#ffffff",
      gray: "#2D2D2D",
      grayDark: "#404040",
      gray26: "#262626",
      gray36: "#363636",
      formBorder: "#9E9E9E",
      footGray: "#191919",
    },
    fontFamily: {
      futur: ["futura"],
      futuraLt: ["futura-light"],
      futuraHvBt: ["futuraHvBt"],
      futuraBkBt: ["futuraBkBt"],
      futuraMdBt: ["futuraMdBt"],
    },
    screens: {
      xs: { max: "600px" },
      sm: "640px",
      md: "768px",
      foo: "960px", // our new breakpoint
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundColor: {
        transparent: "transparent",
      },
      gradientColorStops: {
        transparent: "transparent",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-image":
          "radial-gradient(circle , rgba(255,255,255,.22) 0%, rgba(0, 0, 0, 0) 50%)",
      },
    },
  },
  layers: {
    backgroundOpacity: {
      // use the `utilities` key to define a utility class
      utilities: {
        "from-transparent": {
          "background-color": "rgba(255, 255, 255, 0)",
        },
      },
    },
  },
  corePlugins: {
    // enable the gradientColorStops core plugin
    gradientColorStops: true,
  },

  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "futura-light",
          fontStyle: "light",
          fontWeight: "100",
          fontDisplay: "swap",
          src: "url(/fonts/futuralightbt.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "futura",
          fontWeight: "light",
          src: "url(/fonts/futur.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "futuraHvBt",
          fontWeight: "100",
          src: "url(/fonts/FuturaHeavyfont.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "futuraBkBt",
          fontWeight: "100",
          src: "url(/fonts/FuturaBookfont.ttf)",
        },
      });
    }),
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "futuraMdBt",
          fontWeight: "100",
          src: "url(/fonts/futuramediumbt.ttf)",
        },
      });
    }),
  ],
};
