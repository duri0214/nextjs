'use client'
import { Users } from '@/generated/prismaClient'
import React from 'react'
import { Box, Typography } from '@mui/material'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { dateFormatHelper } from '@/util/date'

type Props = {
  users: Users[]
}
export function UserListPage({ users }: Props) {
  if (!users || users.length === 0) {
    return <Typography variant='h5'>No data available.</Typography>
  }
  const rows: GridRowsProp = users.map((row) => ({
    id: row.id,
    name: row.name,
    role: row.role,
    email: row.email,
    password: row.password,
    passwordToken: row.passwordToken,
    tokenExpiredAt: dateFormatHelper(row.tokenExpiredAt),
    createdAt: dateFormatHelper(row.createdAt),
    updatedAt: dateFormatHelper(row.updatedAt),
  }))
  const columns: GridColDef[] = [
    { field: 'id', headerName: '#' },
    { field: 'name', headerName: '名前' },
    { field: 'role', headerName: '役割' },
    { field: 'email', headerName: 'メール' },
    { field: 'password', headerName: 'パスワード' },
    { field: 'passwordToken', headerName: 'トークン' },
    { field: 'tokenExpiredAt', headerName: 'トークン有効期限', width: 160 },
    { field: 'createdAt', headerName: '作成日時', width: 160 },
    { field: 'updatedAt', headerName: '更新日時', width: 160 },
  ]
  return (
    <>
      <p>保護されたページ</p>
      <Box width='100%'>
        <Typography variant='h6'>Users</Typography>
        <DataGrid columns={columns} rows={rows} />
      </Box>
    </>
  )
}
