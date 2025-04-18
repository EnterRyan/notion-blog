module.exports = {
  content:[
    "./app/**/*.{js,ts,jsx,tsx,mdx}",         // Next.js App Router
    "./src/**/*.{js,ts,jsx,tsx,mdx}",         // FSD 구조 내부 전부
  ],
  darkMode : 'class',
  theme: {
    extend: {
      colors:{
        theme : {
          light:{
            background: '#F9FAFB',
            surface: '#FFFFFF',
            text: '#1F2937',
            subtext: '#6B7280',
            primary: '#3B82F6',
            border: '#E5E7EB',
          },
          dark:{
            background: '#0F172A',
            surface: '#1E293B',
            text: '#F8FAFC',
            subtext: '#94A3B8',
            primary: '#60A5FA',
            border: '#334155',
          }
        }
      },
      fontFamily: {
        sans: ["Pretendard Variable", "sans-serif"],
      },
    },
  },
  plugins: [],
}