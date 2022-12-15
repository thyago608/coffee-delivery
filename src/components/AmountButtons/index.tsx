import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

interface AmountButtonProps {
  onAddProductToCart: () => void
  onRemoveProductToCart: () => void
  amountInCart: number
}

export function AmountButtons({
  onAddProductToCart,
  onRemoveProductToCart,
  amountInCart,
}: AmountButtonProps) {
  return (
    <Container>
      <button type="button" onClick={onRemoveProductToCart}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{amountInCart}</span>
      <button type="button" onClick={onAddProductToCart}>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  )
}
