export interface Coffee {
  id: string
  title: string
  category: string[]
  description: string
  image: string
  price: string
}

export type CoffeeAPIResponse = Omit<Coffee, 'id'> & {
  price: number
}
