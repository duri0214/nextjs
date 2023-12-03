import React from 'react'
import { Box, Button, Typography } from '@mui/material'

export function ForgotPasswordSent() {
  return (
    <Box
      component='main'
      sx={{
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h5' textAlign='center' sx={{ mb: 1 }}>
        送信ボタンが押されました（画面2）
      </Typography>
      <Box sx={{ width: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ textAlign: 'center', width: 310, fontSize: '16px' }}>
          送信ボタンが押された結果、画面が遷移しました。ブラウザの開発者コンソールを開いてURLをクリックしてください
        </Typography>
        <Box sx={{ m: 1 }} />
        <Button variant='outlined' href='/admin/signin' sx={{ width: '100%' }}>
          ログイン画面へ
        </Button>
      </Box>
    </Box>
  )
}
