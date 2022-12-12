import { ShoppingCart } from 'phosphor-react'
import { AmountButtons } from 'components/AmountButtons'
import {
  Container,
  Label,
  Title,
  Description,
  Footer,
  Price,
  CartButton,
} from './styles'
import coffeeImg from 'assets/Image.svg'

export function CoffeeCard() {
  return (
    <Container>
      <img src={coffeeImg} alt="" />
      <Label>tradicional</Label>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Footer>
        <Price>
          R$
          <span>9,90</span>
        </Price>
        <AmountButtons />
        <CartButton>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </Footer>
    </Container>
  )
}
