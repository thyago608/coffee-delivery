import coffeeImg from 'assets/Image.svg'
import { AmountButtons } from 'components/AmountButtons'
import { Trash } from 'phosphor-react'
import {
  Container,
  AmountContainer,
  Title,
  RemoveButton,
  Price,
} from './styles'

export function CartItem() {
  return (
    <Container>
      <img src={coffeeImg} alt="" />
      <div>
        <Title>Expresso Tradicional</Title>
        <AmountContainer>
          <AmountButtons />
          <RemoveButton>
            <Trash size={20} />
            Remover
          </RemoveButton>
        </AmountContainer>
      </div>
      <Price>R$ 9,90</Price>
    </Container>
  )
}
