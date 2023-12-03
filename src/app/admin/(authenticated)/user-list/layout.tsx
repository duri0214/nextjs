import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import options from '@/auth/authOptions'

export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(options)
  if (!session) redirect('/admin/signin')
  return <>{children}</>
}
