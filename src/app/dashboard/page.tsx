import React from 'react'
import { Box, Typography } from '@mui/material'
import InvoiceDataTable from './_component/InvoiceDataTable'
import RevenueDataTable from './_component/RevenueDataTable'

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/dashboard')
  const { revenue, invoice } = await response.json()
  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h4'>Dashboard</Typography>
      <Box>
        <RevenueDataTable revenue={revenue}></RevenueDataTable>
      </Box>
      <Box>
        <InvoiceDataTable invoice={invoice}></InvoiceDataTable>
      </Box>
    </Box>
  )
}
