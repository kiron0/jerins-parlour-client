module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        parlour_theme: {
          primary: "#F63E7B",
          secondary: "#111430",
          accent: "#FF4545",
          neutral: "#3d4451",
          success: "#00C853",
          warning: "#FFB300",
          error: "#009444",
          "base-100": "#ffffff",
          "base-200": "#FFF0F5",
          "base-300": "#E5E5E5",
        },
      },
      "night",
    ],
  },
  plugins: [require("daisyui")],
};
