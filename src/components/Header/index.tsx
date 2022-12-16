import { MapPin } from 'phosphor-react'
import { Container, Logo, Location, Navigation } from './styles'
import { CartButton } from 'components/CartButton'
import { useEffect, useState } from 'react'

interface ILocation {
  plus_code: {
    compound_code: string
  }
}

export function Header() {

  const [locationData, setLocationData] = useState<ILocation>({} as ILocation)

  const userLocation = String(locationData?.plus_code?.compound_code)

  const cutIndex = userLocation.indexOf(' ', 0)
  const location = userLocation.slice(cutIndex)
  const locationLabel = location.length === 1 ? 'Sem localização' : location

  useEffect(() => {
    const fetchLocationUser = async () => {
      try {
        navigator.geolocation.getCurrentPosition(locationResponse => {
          const latitude = locationResponse.coords.latitude
          const longitude = locationResponse.coords.longitude

          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBiqv1CbFdr3AsoUl38Tmc5GvhIunnBUv8`).
            then(response => response.json())
            .then(data => setLocationData(data))
        })
      } catch (e) {
        console.log(e)
      }
    }

    fetchLocationUser()
  }, [])

  return (
    <Container>
      <div>
        <Logo to="/" />
        <Navigation>
          <Location>
            <MapPin size={32} />
            {locationLabel}
          </Location>
          <CartButton />
        </Navigation>
      </div>
    </Container>
  )
}
