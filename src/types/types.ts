export type Revenue = {
  month: string
  revenue: number
}

export type Invoice = {
  id: number
  amount: number
  customer: {
    name: string
    imageUrl: string
    email: string
  }
}
