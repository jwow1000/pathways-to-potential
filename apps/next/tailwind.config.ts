import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CSS variable-based colors
        orange: 'var(--orange)',
        liteOrange: 'var(--lite-orange)',
        mainBlack: 'var(--main-black)',
        gray: 'var(--gray)',
        blue: 'var(--blue)',
        liteGray: 'var(--lite-gray)',
        darkBlue: 'var(--dark-blue)',
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-adamina)", "serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
      },
    },
  },
  // plugins: [
  //   // example plugin for forms (optional)
  //   require('@tailwindcss/forms'),
  //   // typography (optional)
  //   require('@tailwindcss/typography'),
  // ],
}

export default config
