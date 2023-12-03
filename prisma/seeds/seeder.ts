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
  prisma.$disconnect()
}
main().then(() => console.log('seeding ok.'))
