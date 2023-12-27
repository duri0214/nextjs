import React from 'react'
import { Box, Typography } from '@mui/material'
import { InvoiceDataTable } from './_component/InvoiceDataTable'
import { RevenueDataTable } from './_component/RevenueDataTable'
import { Card } from '@/app/dashboard/_component/Card'

export default async function Page() {
  const response = await fetch('http://localhost:3000/api/dashboard')
  const {
    revenue,
    invoice,
    numberOfCustomers,
    numberOfInvoices,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await response.json()

  return (
    <Box display='flex' flexDirection='column'>
      <Typography variant='h4'>Dashboard</Typography>

      {/* カード */}
      <Box display='flex' flexDirection='row'>
        <Card title='Collected' value={totalPaidInvoices}></Card>
        <Card title='Pending' value={totalPendingInvoices}></Card>
        <Card title='Total Invoices' value={numberOfInvoices}></Card>
        <Card title='Total Customers' value={numberOfCustomers}></Card>
      </Box>

      <Box>
        <RevenueDataTable revenue={revenue}></RevenueDataTable>
      </Box>
      <Box>
        <InvoiceDataTable invoice={invoice}></InvoiceDataTable>
      </Box>
    </Box>
  )
}
