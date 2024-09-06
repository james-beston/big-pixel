import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Big Pixel',
  description: 'A small, yet perfectly formed design agency.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta property='og:image' content='<generated>' />
        <meta property='og:image:type' content='<generated>' />
        <meta property='og:image:width' content='<generated>' />
        <meta property='og:image:height' content='<generated>' />
        <meta property='og:image:alt' content='Big Pixel Consultancy Ltd.' />
      </head>
      <body className={GeistSans.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
