'use client'
import { DocumentDuplicateIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { Box, Link, Typography } from '@mui/material'
import { usePathname } from 'next/navigation'
import React from 'react'

// いったん固定値で書くけど本来はdbから引っ張ってきてね
const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Invoices', href: '/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/customers', icon: UserGroupIcon },
]

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link key={link.name} href={link.href}>
            <Box display='flex' flexDirection='row' marginTop='20px'>
              <LinkIcon style={{ width: '2.5rem', height: '2.5rem', marginRight: '10px' }} />
              <Typography
                variant='h6'
                color={pathname === link.href ? 'primary.main' : 'text.primary'}
              >
                {link.name}
              </Typography>
            </Box>
          </Link>
        )
      })}
    </>
  )
}
