import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Container, Logo, Location, Navigation } from './styles'
import { Cart } from 'components/Cart'

export function Header() {
  return (
    <Container>
      <div>
        <Logo to="/" />
        <Navigation>
          <Location>
            <MapPin size={32} />
            Porto Alegre, RS
          </Location>
          <Cart />
        </Navigation>
      </div>
    </Container>
  )
}
