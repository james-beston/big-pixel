import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FBEB00',
      },
      typography: ({ theme }: { theme: any }) => ({
        pixel: {
          css: {
            '--tw-prose-body': theme('colors.zinc[50]'),
            '--tw-prose-headings': theme('colors.primary'),
            '--tw-prose-lead': theme('colors.zinc[200]'),
            '--tw-prose-links': theme('colors.primary'),
            '--tw-prose-bold': theme('colors.white'),
            '--tw-prose-counters': theme('colors.primary'),
            '--tw-prose-bullets': theme('colors.primary'),
            '--tw-prose-hr': theme('colors.zinc[500]'),
            '--tw-prose-quotes': theme('colors.zinc[100]'),
            '--tw-prose-quote-borders': theme('colors.primary'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.lime[500]'),
            '--tw-prose-pre-code': theme('colors.lime[500]'),
            '--tw-prose-pre-bg': theme('colors.zinc[950]'),
            '--tw-prose-pre-border': theme('colors.zinc[500]'),
            '--tw-prose-blockquote': theme('colors.zinc[100]'),
            '--tw-prose-blockquote-border': theme('colors.primary'),
            '--tw-prose-th-borders': theme('colors.white'),
            '--tw-prose-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
export default config;
