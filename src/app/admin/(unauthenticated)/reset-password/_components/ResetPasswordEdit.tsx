'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { FormEvent, useEffect } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'

type ResetPasswordEditForm = {
  token: string
  password: string
  passwordConfirm: string
}

export function ResetPasswordEdit() {
  const router = useRouter()
  const forceRedirect = useSearchParams().size == 0
  const token = useSearchParams().get('token')

  // エフェクトは通常、コンポーネントを外部システム（＝外部コンポーネント）と同期させるのに使います。
  // see: https://ja.react.dev/learn/synchronizing-with-effects
  useEffect(() => {
    if (forceRedirect) {
      router.push('/admin/signin')
    }
  }, [forceRedirect, router])

  // クエリストリング（＝token）がない状態でたどりついたらねずみ返し
  if (forceRedirect) return <></>

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      password: formData.get('password'),
      passwordConfirm: formData.get('passwordConfirm'),
    }
    fetch('/api/admin/reset-password', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
      body: JSON.stringify({ password: data.password, passwordConfirm: data.passwordConfirm }),
    })
      .then(() => {
        router.push('/admin/signin')
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
        パスワード再設定
      </Typography>
      <Box
        component='form'
        sx={{ width: 345, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        onSubmit={handleSubmit}
      >
        <TextField
          id='password'
          name='password'
          type='password'
          label='パスワード'
          variant='outlined'
          required
          sx={{ width: '100%' }}
        />
        <TextField
          id='passwordConfirm'
          name='passwordConfirm'
          type='password'
          label='パスワード再入力'
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
