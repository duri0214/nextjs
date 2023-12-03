import { requestError, validate } from '@/util/apiHandler'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { PrismaClient } from '@/generated/prismaClient'

export async function GET(req: NextRequest) {
  return NextResponse.json({ msg: 'hello, api/auth GET!' })
}

export async function POST(req: NextRequest) {
  const schema = z.object({
    email: z.string(),
    password: z.string(),
  })
  type RequestType = z.infer<typeof schema>
  let data: RequestType

  try {
    data = await validate<RequestType>(req, schema)
  } catch (e: unknown) {
    return requestError(e)
  }

  const prisma = new PrismaClient()
  try {
    const user = await prisma.users.findFirstOrThrow({
      where: {
        email: data.email,
        password: data.password,
      },
    })
    return NextResponse.json(user)
  } catch (error) {
    console.error(error)
  } finally {
    await prisma.$disconnect()
  }
}
