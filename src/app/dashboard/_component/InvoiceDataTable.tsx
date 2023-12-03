'use client'

import React from 'react'
import { Box, Link, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp } from '@mui/x-data-grid'
import { Invoice } from '@/types/types'

export default function InvoiceDataTable({ invoice }: { invoice: Invoice[] }) {
  if (!invoice || invoice.length === 0) {
    return <Typography variant='h5'>No data available.</Typography>
  }

  const rows: GridRowsProp = invoice.map((row) => ({
    id: row.id,
    customerName: row.customer.name,
    amount: row.amount,
  }))

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '請求額No.',
      width: 100,
      renderCell: (params: GridRenderCellParams<any>) => (
        <>
          <Link href={`/invoices/${params.id}`}>{params.value}</Link>
        </>
      ),
    },
    { field: 'customerName', headerName: '名前', width: 150 },
    { field: 'amount', headerName: 'amount', width: 150 },
  ]

  return (
    <Box width='100%'>
      <Typography variant='h6'>Recent Invoice</Typography>
      <DataGrid rows={rows} columns={columns}></DataGrid>
    </Box>
  )
}
