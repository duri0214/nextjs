'use client'

import React, { FormEvent } from 'react'
import { Box, Link, Typography } from '@mui/material'
import { PowerIcon } from '@heroicons/react/24/outline'
import NavLinks from './nav-links'
import AcmeLogo from './acme-logo'
import { useRouter } from 'next/navigation'

export default function SideNav() {
  const router = useRouter()
  const handleLogout = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    router.push('/')
  }
  return (
    <Box display='flex' height='100%' flexDirection='column'>
      {/* ACMEロゴ */}
      <Box bgcolor='primary.main' height='200px'>
        <Link href='/'>
          <AcmeLogo />
        </Link>
      </Box>
      <div>
        {/* Home, Invoices, Customers のメニュー */}
        <Box height='600px'>
          <NavLinks />
        </Box>

        {/* サインアウト */}
        <form onSubmit={handleLogout}>
          <button type='submit'>
            <PowerIcon
              style={{ width: '2.5rem', height: '2.5rem', marginRight: '10px' }}
            ></PowerIcon>
            <Typography variant='h5'>Sign Out</Typography>
          </button>
        </form>
      </div>
    </Box>
  )
}
