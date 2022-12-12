import { MapPin, CreditCard, Money, Bank, CurrencyDollar } from 'phosphor-react'
import { Input } from 'components/Input'
import { PaymentButton } from 'components/PaymentButton'
import {
  Main,
  CompleteOrder,
  DeliveryContainer,
  Heading,
  TextGroup,
  Form,
  InputContainer,
  InputBlock,
  PaymentContainer,
  OptionsPayment,
} from './styles'

export function Checkout() {
  return (
    <Main>
      <CompleteOrder>
        <header>
          <h2>Complete seu pedido</h2>
        </header>
        <DeliveryContainer>
          <Heading>
            <MapPin size={25} color="#C47F17" />
            <TextGroup>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </TextGroup>
          </Heading>
          <Form>
            <InputBlock>
              <Input placeholder="CEP" />
            </InputBlock>
            <Input placeholder="Rua" />
            <InputContainer>
              <InputBlock>
                <Input placeholder="Número" />
              </InputBlock>
              <Input placeholder="Complemento" optionalLabel />
            </InputContainer>

            <InputContainer>
              <InputBlock>
                <Input placeholder="Bairro" />
              </InputBlock>
              <InputBlock className="city">
                <Input placeholder="Cidade" />
              </InputBlock>
              <InputBlock className="uf">
                <Input placeholder="UF" />
              </InputBlock>
            </InputContainer>
          </Form>
        </DeliveryContainer>

        <PaymentContainer>
          <Heading>
            <CurrencyDollar size={20} color="#8047F8" />
            <TextGroup>
              <span>Pagamento</span>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </TextGroup>
          </Heading>
          <OptionsPayment>
            <PaymentButton>
              <CreditCard size={20} />
              Cartão de crédito
            </PaymentButton>
            <PaymentButton>
              <Bank size={20} />
              Cartão de débito
            </PaymentButton>
            <PaymentButton>
              <Money size={20} />
              Dinheiro
            </PaymentButton>
          </OptionsPayment>
        </PaymentContainer>
      </CompleteOrder>
    </Main>
  )
}
