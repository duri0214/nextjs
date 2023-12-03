import React from 'react'
import { inter } from './_component/fonts'
import { Box } from '@mui/material'
import SideNav from './_component/sidenav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiasing`}>
        <Box display='flex' height='100%' flexDirection='row' overflow='hidden'>
          {/* サイドバー表示部 */}
          <Box width='300px' border='1px solid blue' padding='10px'>
            <SideNav />
          </Box>

          {/* コンテンツ表示部 */}
          <Box>{children}</Box>
        </Box>
      </body>
    </html>
  )
}
