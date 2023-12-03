'use client'

import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { Box, Button, FormHelperText, Link, TextField, Typography } from '@mui/material'

export default function SigninForm() {
  const [errorText, setErrorText] = React.useState('')
  const router = useRouter()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    }
    signIn('credentials', {
      redirect: false,
      ...data,
    })
      .then((res) => {
        if (!res || res?.error) {
          setErrorText('Authentication failed.')
          return
        }
        router.push('/')
      })
      .catch(() => {
        setErrorText('System error.')
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
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: 345, display: 'flex', flexDirection: 'column' }}>
        <Typography variant='h5' textAlign='center'>
          ログイン
        </Typography>
        <Box sx={{ m: 2 }} />
        <Box
          component='form'
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField id='email' name='email' label='メールアドレス' variant='outlined' />
          <Box sx={{ m: 1 }} />
          <TextField
            id='password'
            name='password'
            label='パスワード'
            type='password'
            autoComplete='current-password'
          />
          <FormHelperText error>{errorText}</FormHelperText>
          <Box sx={{ m: 2 }} />
          <Button type='submit' variant='outlined'>
            サインイン
          </Button>
          <Link href={'/admin/forgot-password'}>パスワードを忘れました</Link>
        </Box>
      </Box>
    </Box>
  )
}
