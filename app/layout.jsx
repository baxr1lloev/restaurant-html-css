import './globals.css'

export const metadata = {
  title: 'Grilli - Amazing & Delicious Food',
  description: 'A fine dining restaurant experience',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/hero-slider-1.jpg" />
        <link rel="preload" as="image" href="/hero-slider-2.jpg" />
        <link rel="preload" as="image" href="/hero-slider-3.jpg" />
      </head>
      <body id="top">
        {children}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
      </body>
    </html>
  )
}
