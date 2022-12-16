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

export function Checkout() {
  const navigate = useNavigate()
  const { cart, removeProductToCart } = useCart()
  const completeOrderForm = useForm<CompleteOrderFormData>({
    resolver: zodResolver(completeOrderSchema),
  })

  const { handleSubmit, formState } = completeOrderForm

  const onSubmit: SubmitHandler<CompleteOrderFormData> = (data) => {
    console.log(data)
  }


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
              <span>R$ 29,70</span>
            </label>

            <label>
              Entrega
              <span>R$ 3,50</span>
            </label>

            <label>
              Total
              <span>R$ 33,20</span>
            </label>
            <ConfirmOrder type="submit">Confirmar Pedido</ConfirmOrder>

          </Totals>
        </CoffeeSelections>
      </form>
    </Main>
  )
}
