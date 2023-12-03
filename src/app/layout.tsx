import React from 'react'
import { inter } from './_component/fonts'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiasing`}>{children}</body>
    </html>
  )
}
