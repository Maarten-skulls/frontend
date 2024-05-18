import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('/assets/images/dinosaur-hero.jpg')"
      },
    },
    colors: {
      'bg': '#1C1818',
      'primary': '#D9D9D9',
      'black': '#000000',
      'white': '#FFFFFF',
    }
  },
  plugins: [],
};
export default config;
