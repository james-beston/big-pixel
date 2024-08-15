import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import './globals.css';

const geist = localFont({
  src: './fonts/GeistVF.woff2',
  display: 'swap',
});

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
      <body className={geist.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
