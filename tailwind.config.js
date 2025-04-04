module.exports = {
  content:[
    "./app/**/*.{js,ts,jsx,tsx,mdx}",         // Next.js App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}",         // FSD 구조 내부 전부
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Pretendard Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
}