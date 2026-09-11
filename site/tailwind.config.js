/**
 * The public site's palette.
 *
 * Shares the brand green with the app and shares nothing else with the admin
 * panel. The panel is a dark tool built from shadow; this is a product page and
 * should feel like the app it is advertising — light, soft, generous.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        brand: {
          400: '#2BD481',
          500: '#22C274',
          600: '#12A25F',
          700: '#0C8C50',
        },
        ink: {
          DEFAULT: '#0B1F17',
          soft: '#3A4F46',
          muted: '#6B7F76',
        },
        paper: '#F3F7F5',
      },
      fontFamily: {
        sans: ['-apple-system', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise 0.55s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
