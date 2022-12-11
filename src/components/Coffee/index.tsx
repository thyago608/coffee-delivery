import {
  Container,
  Label,
  Title,
  Description,
  Footer,
  Price,
  ContainerButtons,
  CartButton,
} from './styles'
import coffeeImg from 'assets/Image.svg'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function Coffee() {
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
        <ContainerButtons>
          <button type="button">
            <Minus size={20} weight="bold" />
          </button>
          <span>3</span>
          <button type="button">
            <Plus size={20} weight="bold" />
          </button>
        </ContainerButtons>
        <CartButton>
          <ShoppingCart size={30} weight="fill" />
        </CartButton>
      </Footer>
    </Container>
  )
}
