/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        card: '#0D0D0D',
        elevated: '#1A1A1A',
        accent: '#A8FF00',
        'accent-hover': '#C8FF40',
        'text-primary': '#FFFFFF',
        'text-muted': '#CCCCCC',
        border: '#2A2A2A',
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        body: ['Barlow', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'tight-display': '-0.02em',
        'tighter-display': '-0.03em',
        'wide-mono': '0.15em',
      },
    },
  },
  plugins: [],
};
