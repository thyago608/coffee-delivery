import { Navigate } from 'react-router-dom'
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

  if (!delivery) {
    return <Navigate to='/' />
  }

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
                Entrega em <span>Rua {delivery?.street}, {delivery?.number}</span>
              </Text>
              <Text>{delivery?.district} - {delivery?.city}, {delivery?.uf}</Text>
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
                {delivery?.paymentMethod === 'credit' && <span>Cartão de Crédito</span>}
                {delivery?.paymentMethod === 'debit' && <span>Cartão de Débito</span>}
                {delivery?.paymentMethod === 'money' && <span>Dinheiro</span>}
              </Text>
            </TextGroup>
          </Label>
        </LabelsList>
      </ConfirmedOrder>
      <Illustration />
    </Main>
  )
}
