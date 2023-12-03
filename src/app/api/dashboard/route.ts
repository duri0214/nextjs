import { PrismaClient } from '@/generated/prismaClient'
import { NextRequest, NextResponse } from 'next/server'
import { serverError } from '@/util/apiHandler'

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient()
  try {
    const invoice = await prisma.invoice.findMany({
      select: {
        amount: true,
        customer: {
          select: {
            name: true,
            imageUrl: true,
            email: true,
          },
        },
        id: true,
      },
      orderBy: {
        date: 'desc',
      },
      take: 5,
    })
    const revenue = await prisma.revenue.findMany()
    return NextResponse.json({ invoice, revenue })
  } catch (error) {
    return serverError(error)
  } finally {
    await prisma.$disconnect()
  }
}
