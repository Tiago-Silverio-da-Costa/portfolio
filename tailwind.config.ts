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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bgColor: "#0d1117",
        secondarybBg: "#010409",
        highlightText: "#39d353",
        highlightElement: "#238636",
        defaultText: "#e6edf3",
        textOpacity: "#8d96a0",
        borderColor: "#30363d",
        highlightBlue: "#1f6feb",
        textTitle: "#4493f8",
        bgFooter: "#161b22",
        
        bgGo: "#00ADD8",
        bgPython: "rgb(53, 114, 165)",
        bgRuby: "rgb(112, 21, 22)",
        bgRust: "rgb(222, 165, 132)",
        bgTypescript: "#3178c6",
        bgJavascript: "#f1e05a",
        bgJava: "#b07219",
        bgC: "rgb(85, 85, 85)",
        bgCpp: "rgb(243, 75, 125)",
        bgCrystal: "rgb(0, 1, 0)",
        bgDart: "rgb(0, 180, 171)",
        bgElixir: "rgb(110, 74, 126)",
        bgErlang: "rgb(184, 57, 152)",
        bgHaskell: "rgb(94, 80, 134)",
        bgHtml: "rgb(227, 76, 38)",
        bgCSS: "rgb(86, 61, 124)",
        bgPhp: "rgb(79, 93, 149)",
        bgShell: "rgb(137, 224, 81)",
        bgSwift: "rgb(240, 81, 56)",
        bgKotlin: "rgb(169, 123, 255)",
        bgLua: "rgb(0, 0, 128)",
        bgPerl: "rgb(2, 152, 195)",
        bgR: "rgb(25, 140, 231)",
        bgScala: "rgb(194, 45, 64)",
      },
    },
  },
  plugins: [],
};
export default config;
