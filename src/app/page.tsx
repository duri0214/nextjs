import React from 'react'
import { Box, Button, Grid, Hidden, Link, Typography } from '@mui/material'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import AcmeLogo from './_component/acme-logo'
import { lusitana } from './_component/fonts'
import Image from 'next/image'

export default function Page() {
  return (
    <Box display='flex' flexDirection='column'>
      {/* 青い領域（ヘッダ） */}
      <Grid item xs={12}>
        <Box height={200} width='100%' bgcolor='primary.main'>
          <Typography sx={{ color: 'white' }}>保護されていないページ</Typography>
          <Typography variant='h5' sx={{ color: 'white', marginBottom: 2 }}>
            <AcmeLogo />
          </Typography>
        </Box>
      </Grid>

      {/* ライトグレーの領域（コンテンツ領域） */}
      <Box display='flex' flexDirection='row'>
        <Box
          width={400}
          height={760}
          bgcolor='#f0f0f0'
          display='flex'
          flexDirection='column'
          padding='30px'
          justifyContent='center'
        >
          <Box display='flex' flexDirection='column'>
            <ul>
              <li>
                <Typography>
                  <a href={'/admin/user-list'}>ユーザー管理ページにとぶ</a>
                </Typography>
              </li>
            </ul>

            <Typography
              className={`${lusitana.className}`}
              variant='h5'
              sx={{ color: 'text.primary', marginBottom: 2 }}
            >
              <strong>Welcome to Acme.</strong> This is the example for the{' '}
              <Link href='https://nextjs.org/learn' color='primary'>
                Next.js Learn Course
              </Link>
              , brought to you by Vercel.
            </Typography>
            <Link href='/admin/signin' underline='none'>
              <Button
                variant='contained'
                color='primary'
                sx={{ width: '200px', borderRedius: 2, textTransform: 'none' }}
              >
                Log in
                <ArrowRightIcon
                  className='text-white'
                  style={{ width: '1rem', height: '1rem', paddingLeft: '10px' }}
                />
              </Button>
            </Link>
          </Box>
        </Box>

        {/* ホワイトの領域 */}
        <Box display='flex' alignItems='center' justifyContent='center'>
          <Hidden mdDown>
            <Image
              src='/hero-desktop.png'
              width={1000}
              height={760}
              className='hidden md:block'
              alt='Screenshots of the dashboard project showing desktop version'
            />
          </Hidden>
          <Hidden mdUp>
            <Image
              src='/hero-mobile.png'
              width={560}
              height={620}
              className='block md:hidden'
              alt='Screenshots of the dashboard project showing mobile version'
            />
          </Hidden>
        </Box>
      </Box>
    </Box>
  )
}
