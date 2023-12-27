import { PrismaClient } from '@/generated/prismaClient'
import { NextRequest, NextResponse } from 'next/server'
import { serverError } from '@/util/apiHandler'

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient()
  try {
    const invoice = prisma.invoice.findMany({
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
    const revenue = prisma.revenue.findMany()
    const invoiceCountPromise = prisma.invoice.count()
    const customerCountPromise = prisma.customer.count()
    const invoicePaidPromise = prisma.invoice.aggregate({
      _sum: { amount: true },
      where: { status: 'paid' },
    })
    const invoicePendingPromise = prisma.invoice.aggregate({
      _sum: { amount: true },
      where: { status: 'pending' },
    })
    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoicePaidPromise,
      invoicePendingPromise,
    ])

    return NextResponse.json({
      invoice,
      revenue,
      numberOfInvoices: data[0],
      numberOfCustomers: data[1],
      totalPaidInvoices: data[2]._sum.amount,
      totalPendingInvoices: data[3]._sum.amount,
    })
  } catch (error) {
    return serverError(error)
  } finally {
    await prisma.$disconnect()
  }
}
