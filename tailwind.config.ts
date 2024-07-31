import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'surface': '#1C1818',
      'onSurface': '#2F2A24',
      'primary': '#241F19',
      'secondary': '#E27022',
      'textColor': '#FFFFFF',
      'blackColor': '#000000',
      'succesColor': '#4BB543',
      'transparent': 'transparent',
    },
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
