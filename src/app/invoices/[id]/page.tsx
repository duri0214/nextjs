import { Invoice } from '@/generated/prismaClient'

export default async function Page({ params }: { params: { id: string } }) {
  // Note: 「変数の消費」と「await」に手こずった
  const response = await fetch(`http://localhost:3000/api/invoices/${Number(params.id)}`)
  const invoice: Invoice = await response.json()
  if (invoice == null) {
    // TODO: idの4だけなぜか取得できず、ここにながれる（api直はレコード取得できる）
    return <>データが取得できませんでした</>
  }

  return (
    <main>
      <ul>
        <li>{invoice.id}</li>
        <li>{invoice.customerId}</li>
        <li>{invoice.amount}</li>
        <li>{invoice.date}</li>
        <li>{invoice.status}</li>
      </ul>
    </main>
  )
}
