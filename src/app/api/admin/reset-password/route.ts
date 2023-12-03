import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { PrismaClient } from '@/generated/prismaClient'
import { requestError, serverError, validate } from '@/util/apiHandler'

export async function PUT(req: NextRequest) {
  const schema = z.object({
    password: z.string(),
    passwordConfirm: z.string(),
  })
  type RequestType = z.infer<typeof schema>
  let data: RequestType

  let userId: number
  const prisma = new PrismaClient()
  try {
    data = await validate<RequestType>(req, schema)

    let token = req.headers.get('Authorization')
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7)
    } else {
      throw new Error(JSON.stringify({ message: 'Invalid or missing Bearer token.' }))
    }
    const { id, tokenExpiredAt } = await prisma.users.findFirstOrThrow({
      where: { passwordToken: token },
    })
    userId = id

    if (tokenExpiredAt && new Date() > tokenExpiredAt) {
      throw new Error(JSON.stringify({ message: 'Token has expired.' }))
    }
    if (data.password != data.passwordConfirm) {
      throw new Error(
        JSON.stringify({
          message: 'The password and password confirmation do not match. Please try again.',
        }),
      )
    }
  } catch (error) {
    return requestError(error)
  }

  try {
    const { id } = await prisma.users.update({
      where: { id: userId },
      data: { password: data.password },
    })
    return NextResponse.json({ id })
  } catch (error) {
    return serverError(error)
  }
}
