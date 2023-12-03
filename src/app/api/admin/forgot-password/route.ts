import { requestError, serverError, validate } from '@/util/apiHandler'
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { PrismaClient } from '@/generated/prismaClient'
import { generateToken } from '@/util/token'
import { dateOffset } from '@/util/date'

export async function POST(req: NextRequest) {
  const schema = z.object({
    to: z.string().email(),
  })
  type RequestType = z.infer<typeof schema>
  let data: RequestType

  // 送信先メールアドレスのuserを抽出
  let userName: string
  const prisma = new PrismaClient()
  try {
    data = await validate<RequestType>(req, schema)
    const { name } = await prisma.users.findFirstOrThrow({ where: { email: data.to } })
    userName = name || ''
  } catch (error) {
    return requestError(error)
  }

  // TODO: メール送信
  const passwordToken = generateToken()
  const tokenExpiredAt: Date = dateOffset(30, 'minute')
  let message: object = {
    to: data.to,
    from: 'noreply@example.com',
    subject: 'パスワード再設定用のURLをくれてやろう',
    body: `${userName} さん、パスワード再設定用のURLです http://localhost:3000/admin/reset-password?token=${passwordToken}`,
  }
  try {
    await prisma.users.update({
      where: { email: data.to },
      data: {
        passwordToken,
        tokenExpiredAt,
      },
    })

    return NextResponse.json(message)
  } catch (error) {
    return serverError(error)
  } finally {
    await prisma.$disconnect()
  }
}
