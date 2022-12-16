import { ShoppingCart } from 'phosphor-react'
import { AmountButtons } from 'components/AmountButtons'
import { Coffee } from 'types/Coffee'
import {
  Container,
  Label,
  LabelList,
  Title,
  Description,
  Footer,
  Price,
  CartButton,
} from './styles'
import { useCart } from 'hooks/useCart'

interface CoffeeCardProps {
  data: Coffee
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const { addProductToCart } = useCart()

  const handleAddProductToCart = () => addProductToCart(data)

  return (
    <Container>
      <img src={data.image} alt={data.title} />
      <LabelList>
        {data.category.map((category) => (
          <Label key={category}>{category}</Label>
        ))}
      </LabelList>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Footer>
        <Price>
          <span>{data.priceFormatted}</span>
        </Price>
        <AmountButtons product={data} />
        <CartButton onClick={handleAddProductToCart}>
          <ShoppingCart size={22} weight="fill" />
        </CartButton>
      </Footer>
    </Container>
  )
}
