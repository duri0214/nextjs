'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { Revenue } from '@/types/types'

export function RevenueDataTable({ revenue }: { revenue: Revenue[] }) {
  if (!revenue || revenue.length === 0) {
    return <Typography variant='h5'>No data available.</Typography>
  }

  const rows: GridRowsProp = revenue
  const columns: GridColDef[] = [
    {
      field: 'month',
      headerName: '月',
      width: 150,
    },
    { field: 'revenue', headerName: '収益', width: 150 },
  ]

  return (
    <Box width='100%'>
      <Typography variant='h6'>Recent Revenue</Typography>
      <DataGrid rows={rows} columns={columns}></DataGrid>
    </Box>
  )
}
