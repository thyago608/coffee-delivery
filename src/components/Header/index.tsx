import { MapPin } from 'phosphor-react'
import { Container, Logo, Location, Navigation } from './styles'
import { CartButton } from 'components/CartButton'

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
          <CartButton />
        </Navigation>
      </div>
    </Container>
  )
}
