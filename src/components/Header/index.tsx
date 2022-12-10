import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Container, Logo, Location, Navigation } from './styles'

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
          <Link to="/checkout">
            <ShoppingCart size={32} weight="fill" />
          </Link>
        </Navigation>
      </div>
    </Container>
  )
}
