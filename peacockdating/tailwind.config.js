/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Enhanced Peacock design system
        peacock: {
          50: '#F0F9FF',      // Very light peacock
          100: '#E0F2FE',     // Light peacock
          200: '#BAE6FD',     // Lighter peacock
          300: '#7DD3FC',     // Light medium peacock
          400: '#2A4D8F',     // Medium peacock (original 400)
          500: '#004D7A',     // Primary peacock (original 500)
          600: '#003D62',     // Darker primary
          700: '#001F3F',     // Dark backgrounds (original 700)
          800: '#001A35',     // Very dark
          900: '#00152B',     // Darkest
          purple: '#6A0DAD',  // Accents/hover
          gold: '#FFC107',    // CTA highlight, borders
          green: '#00B894',   // Success/positive
          teal: '#20B2AA',    // Additional peacock-inspired color
          navy: '#1E3A8A',    // Deep navy blue
        },
        // Neutral colors with better contrast
        surface: {
          50: '#FAFBFC',      // Very light surface
          100: '#F9FAFB',     // Light background (original surface)
          200: '#F1F5F9',     // Slightly darker surface
          300: '#E2E8F0',     // Medium surface
        },
        ink: {
          50: '#F8FAFC',      // Very light ink
          100: '#F1F5F9',     // Light ink
          200: '#E2E8F0',     // Medium light ink
          300: '#CBD5E1',     // Medium ink
          400: '#94A3B8',     // Medium dark ink
          500: '#64748B',     // Dark ink
          600: '#475569',     // Darker ink
          700: '#334155',     // Very dark ink
          800: '#1E293B',     // Almost black ink
          900: '#1F2937',     // Primary text (original ink)
        },
        subtext: '#4B5563',   // Secondary text
        divider: '#E5E7EB',   // Dividers
        
        // Legacy support
        'peacock-blue': '#004D7A',
        'peacock-dark': '#001F3F',
        'peacock-soft': '#F9FAFB',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
  boxShadow: { soft: '0 12px 30px rgba(0,0,0,.08)' },
      backgroundImage: {
        'feather-gradient': 'linear-gradient(135deg, rgba(0,77,122,.55), rgba(106,13,173,.45))',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '1.5rem',
        },
        screens: { xl: '1100px' },
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
}
