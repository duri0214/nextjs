import { Box, Typography } from '@mui/material'
import { Language } from '@mui/icons-material'
import { lusitana } from './fonts'
import React from 'react'

export default function AcmeLogo() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', color: 'white' }}>
      <Language sx={{ fontSize: '3rem', transform: 'rotate(15deg)' }} />
      <Typography
        className={`${lusitana.className}`}
        variant='h2'
        sx={{ fontSize: '2.75rem', marginLeft: '8px' }}
      >
        Acme
      </Typography>
    </Box>
  )
}
