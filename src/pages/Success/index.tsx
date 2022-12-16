import { useCart } from 'hooks/useCart'
import {
  Main,
  ConfirmedOrder,
  LabelsList,
  Label,
  TextGroup,
  Text,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
  Illustration,
} from './styles'

export function Success() {
  const { delivery } = useCart()

  return (
    <Main>
      <ConfirmedOrder>
        <header>
          <h2>Uhu! Pedido Confirmado</h2>
        </header>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <LabelsList>
          <Label>
            <MapPinIcon size={32} weight="fill" />
            <TextGroup>
              <Text>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </Text>
              <Text>Farrapos - Porto Alegre, RS</Text>
            </TextGroup>
          </Label>

          <Label>
            <ClockIcon size={32} weight="fill" />
            <TextGroup>
              <Text>Previsão de entrega</Text>
              <Text>
                <span>20 min - 30 min</span>
              </Text>
            </TextGroup>
          </Label>

          <Label>
            <CurrencyDollarIcon size={32} weight="fill" />
            <TextGroup>
              <Text>Pagamento na entrega</Text>
              <Text>
                <span>Cartão de Crédito</span>
              </Text>
            </TextGroup>
          </Label>
        </LabelsList>
      </ConfirmedOrder>
      <Illustration />
    </Main>
  )
}
