import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Big Pixel Consulting Ltd.',
    short_name: 'Big Pixel',
    description: 'A small, yet perfectly formed design agency, right in the heart of Norfolk.',
    categories: ['business', 'design', 'development'],
    start_url: '/',
    display: 'standalone',
    background_color: '#27272A',
    theme_color: '#27272A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}