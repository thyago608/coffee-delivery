import { AmountButtons } from 'components/AmountButtons'
import { Trash } from 'phosphor-react'
import { Coffee } from 'types/Coffee'
import {
  Container,
  AmountContainer,
  Title,
  RemoveButton,
  Price,
} from './styles'

interface CartItemProps {
  product: Coffee
  removeProductToCart: (id: string) => void
}

export function CartItem({ product, removeProductToCart }: CartItemProps) {
  const onRemoveProductToCart = () => removeProductToCart(product.title)

  return (
    <Container>
      <img src={product.image} alt={product.title} />
      <div>
        <Title>{product.title}</Title>
        <AmountContainer>
          <AmountButtons product={product} />
          <RemoveButton onClick={onRemoveProductToCart}>
            <Trash size={15} />
            Remover
          </RemoveButton>
        </AmountContainer>
      </div>
      <Price>{product.priceFormatted}</Price>
    </Container>
  )
}
