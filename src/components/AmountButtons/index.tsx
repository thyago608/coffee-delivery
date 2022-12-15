import { useCart } from 'hooks/useCart'
import { Minus, Plus } from 'phosphor-react'
import { Coffee } from 'types/Coffee'
import { Container } from './styles'

interface AmountButtonProps {
  product: Coffee
}

export function AmountButtons({ product }: AmountButtonProps) {
  const { addProductToCart, removeProductUnitToCart, unitsPerProduct } =
    useCart()

  const handleAddProductToCart = () => addProductToCart(product)

  const handleRemoveProductToCart = () => removeProductUnitToCart(product.title)

  const amountInCart = unitsPerProduct(product.title)

  const buttonMinusDisabled = amountInCart === 0

  return (
    <Container>
      <button
        type="button"
        onClick={handleRemoveProductToCart}
        disabled={buttonMinusDisabled}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{amountInCart}</span>
      <button type="button" onClick={handleAddProductToCart}>
        <Plus size={14} weight="bold" />
      </button>
    </Container>
  )
}
