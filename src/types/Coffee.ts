export interface Coffee {
  title: string
  category: string[]
  description: string
  image: string
  price: number
  priceFormatted: string
}

export type CoffeeAPIResponse = Omit<Coffee, 'priceFormatted'>
