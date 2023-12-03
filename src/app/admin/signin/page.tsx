import { redirect } from 'next/navigation'
import SigninForm from '@/app/admin/signin/_components/SigninForm'
import { getUserSession } from '@/auth/getUserSession'
import React from 'react'

export default async function Page() {
  const userSession = await getUserSession()
  if (userSession) {
    redirect('/')
  }
  return <SigninForm />
}
