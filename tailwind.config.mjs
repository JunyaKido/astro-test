/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "nc-1": "#111",
        "nc-2": "#222",
        "nc-3": "#333",
        "nc-4": "#444",
        "nc-5": "#555",
        "nc-6": "#666",
        "nc-7": "#777",
        "nc-8": "#888",
        "nc-9": "#999",
        "nc-a": "#aaa",
        "nc-b": "#bbb",
        "nc-c": "#ccc",
        "nc-d": "#ddd",
        "nc-e": "#eee",
      },
      fontSize: {
        tiny: ".625rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
