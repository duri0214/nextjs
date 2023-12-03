import { PrismaClient } from '@/generated/prismaClient'

async function main() {
  const prisma = new PrismaClient()
  await prisma.users.deleteMany()
  await prisma.users.create({
    data: {
      name: '開発 太郎',
      email: 'test@example.com',
      password: 'hoge',
    },
  })
  await prisma.customer.createMany({
    data: [
      {
        id: 1,
        name: 'Delba de Oliveira',
        email: 'delba@olivaira.com',
        imageUrl: '/customers/delba-de-oliveira.png',
      },
      {
        id: 2,
        name: 'Lee Robinson',
        email: 'lee@robinson.com',
        imageUrl: '/customers/lee-robinson.png',
      },
      {
        id: 3,
        name: 'Hector Simpson',
        email: 'hector@simpson.com',
        imageUrl: '/customers/hector-simpson.png',
      },
      {
        id: 4,
        name: 'Steven Tey',
        email: 'steven@tey.com',
        imageUrl: '/customers/steven-tey.png',
      },
      {
        id: 5,
        name: 'Steph Dietz',
        email: 'steph@dietz.com',
        imageUrl: '/customers/steph-diets.png',
      },
      {
        id: 6,
        name: 'Michael Novotny',
        email: 'michael@novotny',
        imageUrl: '/customers/michael-novotny.png',
      },
      {
        id: 7,
        name: 'Evil Rabbit',
        email: 'evil@rabbit.com',
        imageUrl: '/customers/evil-rabbit.png',
      },
      {
        id: 8,
        name: 'Emil komalski',
        email: 'emil@komalski.com',
        imageUrl: '/customers/emil-komalski.png',
      },
      {
        id: 9,
        name: 'Amy Burns',
        email: 'amy@burns.com',
        imageUrl: '/customers/amy-burns.png',
      },
      {
        id: 10,
        name: 'Balazs Orban',
        email: 'balazs@orban.com',
        imageUrl: '/customers/balazs-orban.png',
      },
    ],
  })
  await prisma.invoice.createMany({
    data: [
      {
        customerId: 1,
        amount: 15795,
        date: '2022-11-14',
        status: 'pending',
      },
      {
        customerId: 2,
        amount: 20348,
        date: '2022-11-14',
        status: 'pending',
      },
      {
        customerId: 5,
        amount: 3040,
        date: '2022-10-29',
        status: 'paid',
      },

      {
        customerId: 4,
        amount: 44000,
        date: '2023-09-10',
        status: 'paid',
      },
      {
        customerId: 6,
        amount: 34577,
        date: '2023-09-10',
        status: 'paid',
      },
      {
        customerId: 8,
        amount: 54246,
        date: '2023-07-16',
        status: 'pending',
      },
      {
        customerId: 7,
        amount: 666,
        date: '2023-06-27',
        status: 'pending',
      },
      {
        customerId: 4,
        amount: 32545,
        date: '2023-06-09',
        status: 'paid',
      },
      {
        customerId: 5,
        amount: 1250,
        date: '2023-06-17',
        status: 'paid',
      },
      {
        customerId: 6,
        amount: 8546,
        date: '2023-06-07',
        status: 'paid',
      },
      {
        customerId: 2,
        amount: 500,
        date: '2023-08-19',
        status: 'paid',
      },
      {
        customerId: 6,
        amount: 8945,
        date: '2023-06-03',
        status: 'paid',
      },
      {
        customerId: 3,
        amount: 8945,
        date: '2023-06-18',
        status: 'paid',
      },
      {
        customerId: 1,
        amount: 8945,
        date: '2023-10-04',
        status: 'paid',
      },
      {
        customerId: 3,
        amount: 1000,
        date: '2022-06-05',
        status: 'paid',
      },
    ],
  })
  await prisma.revenue.createMany({
    data: [
      {
        month: 'Jan',
        revenue: 2000,
      },
      {
        month: 'Feb',
        revenue: 1800,
      },
      {
        month: 'Mar',
        revenue: 2200,
      },
      {
        month: 'Apr',
        revenue: 2500,
      },
      {
        month: 'May',
        revenue: 2300,
      },
      {
        month: 'Jun',
        revenue: 3200,
      },
      {
        month: 'Jul',
        revenue: 3500,
      },
      {
        month: 'Aug',
        revenue: 3700,
      },
      {
        month: 'Sep',
        revenue: 2500,
      },
      {
        month: 'Oct',
        revenue: 2800,
      },
      {
        month: 'Nov',
        revenue: 3000,
      },
      {
        month: 'Dec',
        revenue: 4800,
      },
    ],
  })
  prisma.$disconnect()
}
main().then(() => console.log('seeding ok.'))
