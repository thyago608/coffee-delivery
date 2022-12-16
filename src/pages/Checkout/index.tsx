import { MapPin, CreditCard, Money, Bank, CurrencyDollar } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { PaymentButton } from 'components/PaymentButton'
import { CartItem } from 'components/CartItem'
import { useCart } from 'hooks/useCart'

import {
  Main,
  CompleteOrder,
  DeliveryContainer,
  Heading,
  TextGroup,
  PaymentContainer,
  OptionsPayment,
  CoffeeSelections,
  CoffeeList,
  CartItemContainer,
  Totals,
  ConfirmOrder,
} from './styles'

import { CompleteOrderForm } from './components/CompleteOrderForm'
import { useState } from 'react'

const completeOrderSchema = zod.object({
  zipcode: zod.number().positive().min(5),
  street: zod.string().min(5),
  number: zod.number().positive().min(1),
  complement: zod.string().optional(),
  district: zod.string().min(5),
  city: zod.string().min(5),
  uf: zod.string().min(2).max(2)
})

type CompleteOrderFormData = zod.infer<typeof completeOrderSchema>

type MethodsPayment = 'credit' | 'debit' | 'money' | null

const zeroBRL = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(0)

export function Checkout() {
  const navigate = useNavigate()
  const [paymentMethod, setPaymentMethod] = useState<MethodsPayment>(null)
  const { cart, removeProductToCart, totalItems, addDeliveryInformation } = useCart()
  const completeOrderForm = useForm<CompleteOrderFormData>({
    resolver: zodResolver(completeOrderSchema),
  })

  const { handleSubmit } = completeOrderForm

  const onSubmit: SubmitHandler<CompleteOrderFormData> = (data) => {
    const { city, district, number, street, uf } = data

    if (paymentMethod) {
      addDeliveryInformation({
        city,
        district,
        number,
        street,
        uf,
        paymentMethod
      })

      navigate("/success")
    }
  }

  const valueTotalItens = cart.reduce((acc, currentValue) => {
    const amount = currentValue.amount
    const price = currentValue.product.price

    acc += amount * price
    return acc
  }, 0)

  const valueTotalItensFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valueTotalItens)

  const valueTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valueTotalItens + 3.5)

  const totalAmountToShow = totalItems === 0 ? zeroBRL : valueTotal
  const isDisableFields = totalItems === 0

  return (
    <Main>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <FormProvider {...completeOrderForm}>
              <CompleteOrderForm />
            </FormProvider>
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
              <PaymentButton
                selected={paymentMethod === 'credit'}
                onClick={() => setPaymentMethod('credit')}
                disabled={isDisableFields}
              >
                <CreditCard size={20} />
                Cartão de crédito
              </PaymentButton>
              <PaymentButton
                selected={paymentMethod === 'debit'}
                onClick={() => setPaymentMethod('debit')}
                disabled={isDisableFields}
              >
                <Bank size={20} />
                Cartão de débito
              </PaymentButton>
              <PaymentButton
                selected={paymentMethod === 'money'}
                onClick={() => setPaymentMethod('money')}
                disabled={isDisableFields}
              >
                <Money size={20} />
                Dinheiro
              </PaymentButton>
            </OptionsPayment>
          </PaymentContainer>
        </CompleteOrder>

        <CoffeeSelections>
          <header>
            <h2>Cafés selecionados</h2>
          </header>
          <CoffeeList>
            {cart.map((item) => (
              <CartItemContainer key={item.product.title}>
                <CartItem
                  product={item.product}
                  removeProductToCart={removeProductToCart}
                />
              </CartItemContainer>
            ))}
          </CoffeeList>
          <Totals>
            <label>
              Total de itens
              <span>{valueTotalItensFormatted}</span>
            </label>

            <label>
              Entrega
              <span>R$ 3,50</span>
            </label>

            <label>
              Total
              <span>{totalAmountToShow}</span>
            </label>
            <ConfirmOrder
              type="submit"
              disabled={isDisableFields}
            >Confirmar Pedido</ConfirmOrder>
          </Totals>
        </CoffeeSelections>
      </form>
    </Main>
  )
}
