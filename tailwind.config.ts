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
      'bg-color': '#1C1818',
      'white': '#FFFFFF',
      'black': '#000000'
    }
  },
  plugins: [],
};
export default config;
