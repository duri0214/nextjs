import React, { FormEvent } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

type Props = {
  onCompletion: () => void
}

export function ForgotPasswordEdit({ onCompletion }: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email'),
    }
    fetch('/api/admin/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ to: data.email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`data: ${JSON.stringify(data)}`)
        onCompletion()
      })
      .catch((error) => {
        console.error('Fetch error:', error)
      })
  }

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
        パスワードを忘れた場合
      </Typography>
      <Box
        component='form'
        sx={{ width: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        onSubmit={handleSubmit}
      >
        <TextField
          id='email'
          name='email'
          label='メールアドレス'
          variant='outlined'
          required
          sx={{ width: '100%' }}
        />
        <Box sx={{ m: 1 }} />
        <Button type='submit' variant='outlined'>
          送信
        </Button>
      </Box>
    </Box>
  )
}
