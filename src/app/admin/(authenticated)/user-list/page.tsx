import React from 'react'
import { UserListPage } from './_components/UserListPage'
import { PrismaClient } from '@/generated/prismaClient'

export default async function Page() {
  const prisma = new PrismaClient()
  const props = {
    users: await prisma.users.findMany(),
  }
  return <UserListPage {...props} />
}
