import { ShoppingCart } from 'phosphor-react'
import { Container, Label } from './styles'

export function CartButton() {
  return (
    <Container to="/checkout">
      <ShoppingCart size={32} weight="fill" />
      <Label>3</Label>
    </Container>
  )
}
