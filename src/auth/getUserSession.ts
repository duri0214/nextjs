import { UserSession } from '@/auth/UserSession'
import options from '@/auth/authOptions'
import { getServerSession } from 'next-auth'

export async function getUserSession(): Promise<UserSession | null> {
  const session = await getServerSession(options)
  if (!session) return null
  return session.user as UserSession
}
