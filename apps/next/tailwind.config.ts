import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'], // supports both class-based or data attribute dark mode
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Example CSS variable-based colors
        orange: 'var(--orange)',
        liteOrange: 'var(--lite-orange)',
        black: 'var(--main-black)',
        gray: 'var(--gray)',
        blue: 'var(--blue)',
        liteGray: 'var(--lite-gray)',
        darkBlue: 'var(--dark-blue)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        // example custom spacing scale
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
