import { useCart } from 'hooks/useCart'
import { ShoppingCart } from 'phosphor-react'
import { Container, Label } from './styles'

export function CartButton() {
  const { totalItems } = useCart()

  return (
    <Container to="/checkout">
      <ShoppingCart size={32} weight="fill" />
      {totalItems !== 0 && <Label>{totalItems}</Label>}
    </Container>
  )
}
