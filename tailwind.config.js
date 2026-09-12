/**
 * The public site's palette.
 *
 * Taken from the app itself (lib/core/theme/hast_colors.dart), not invented
 * alongside it. Somebody who taps "Ilovani olish" should land in something that
 * looks like the page that sent them there; two greens that are nearly the same
 * read as a mistake rather than a family.
 */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        // The brand ramp, exactly as the app declares it.
        brand: {
          50: '#EFFCF5',
          100: '#D6F7E5',
          200: '#AEEFCB',
          300: '#7DE2AD',
          400: '#4FD68C',
          500: '#22C274',
          600: '#12A25F',
          700: '#0D7F4B',
          800: '#0B643C',
          900: '#094D30',
        },
        teal: '#17B8C4',
        gold: '#E8B44A',
        ink: {
          DEFAULT: '#0B1F17',
          soft: '#3A4F46',
          muted: '#6B7F76',
          faint: '#9AAAA3',
        },
        canvas: '#F4FAF7',
        line: '#E1EDE7',
        night: {
          DEFAULT: '#06110D',
          deep: '#040B08',
          surface: '#0E1D17',
          line: '#1D302A',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '62ch',
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-9px)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(220%)' },
        },
      },
      animation: {
        rise: 'rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        float: 'float 6s ease-in-out infinite',
        sheen: 'sheen 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
