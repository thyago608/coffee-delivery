import { Timer, ShoppingCart, Package, Coffee } from 'phosphor-react'

import {
  Main,
  CoffeeImage,
  SectionIntro,
  IntroContent,
  Title,
  Description,
  WeOffer,
  Label,
} from './styles'

export function Home() {
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
            <Label backgroundSvg="yellow">
              <Timer size={32} weight="fill" />
              Entrega rápida e rastreada
            </Label>
            <Label backgroundSvg="gray">
              <Package size={32} weight="fill" />
              Embalagem mantém o café intacto
            </Label>
            <Label backgroundSvg="purple">
              <Coffee size={32} weight="fill" />O café chega fresquinho até você
            </Label>
          </WeOffer>
        </IntroContent>
        <CoffeeImage />
      </SectionIntro>
    </Main>
  )
}
