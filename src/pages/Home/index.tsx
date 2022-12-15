import { useEffect, useState } from 'react'
import {
  Timer,
  ShoppingCart,
  Package,
  Coffee as CoffeeIcon,
} from 'phosphor-react'
import { CoffeeCard } from 'components/CoffeeCard'
import { Coffee, CoffeeAPIResponse } from 'types/Coffee'
import { v4 } from 'uuid'

import {
  Main,
  CoffeeImage,
  SectionIntro,
  IntroContent,
  Title,
  Description,
  WeOffer,
  Label,
  SectionCoffee,
  CoffeeList,
  Heading,
} from './styles'
import { useCart } from 'hooks/useCart'

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const { cart } = useCart()

  console.log(cart)

  useEffect(() => {
    const fetchCoffees = async () => {
      const response = await fetch('http://localhost:3333/coffees')
      const coffees = await response.json()

      const coffeesFormatted = coffees.map((coffee: CoffeeAPIResponse) => {
        return {
          ...coffee,
          id: v4(),
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(coffee.price),
        }
      })

      setCoffees(coffeesFormatted)
    }

    fetchCoffees()
  }, [])

  return (
    <Main>
      <SectionIntro>
        <IntroContent>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <Description>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </Description>
          <WeOffer>
            <Label backgroundSvg="yellowDark">
              <ShoppingCart size={32} weight="fill" />
              Compra simples e segura
            </Label>
            <Label backgroundSvg="gray">
              <Package size={32} weight="fill" />
              Embalagem mantém o café intacto
            </Label>
            <Label backgroundSvg="yellow">
              <Timer size={32} weight="fill" />
              Entrega rápida e rastreada
            </Label>
            <Label backgroundSvg="purple">
              <CoffeeIcon size={32} weight="fill" />O café chega fresquinho até
              você
            </Label>
          </WeOffer>
        </IntroContent>
        <CoffeeImage />
      </SectionIntro>
      <SectionCoffee>
        <Heading>
          <h2>Nossos cafés</h2>
        </Heading>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} data={coffee} />
          ))}
        </CoffeeList>
      </SectionCoffee>
    </Main>
  )
}
