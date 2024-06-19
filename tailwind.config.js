const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04c9f1",
        "primary-content": "#000000",
        "primary-dark": "#039fbf",
        "primary-light": "#2cd9fc",

        secondary: "#f1042b",
        "secondary-content": "#fff5f7",
        "secondary-dark": "#bf0322",
        "secondary-light": "#fc2c4f",

        background: "#eff0f1",
        foreground: "#fbfbfb",
        border: "#dde1e2",

        copy: "#232829",
        "copy-light": "#5e6b6e",
        "copy-lighter": "#849295",

        success: "#04f104",
        warning: "#f1f104",
        error: "#f10404",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#fff5f5",
      },
    },
  },
  plugins: [],
};
export default config;
