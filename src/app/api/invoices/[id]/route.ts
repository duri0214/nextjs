import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prismaClient'
import { serverError } from '@/util/apiHandler'

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const prisma = new PrismaClient()
  try {
    const invoices = await prisma.invoice.findFirst({
      where: { id: Number(params.id) },
    })
    return NextResponse.json(invoices)
  } catch (error) {
    return serverError(error)
  } finally {
    await prisma.$disconnect()
  }
}
