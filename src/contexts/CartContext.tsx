import { createContext, ReactNode, useReducer, useState } from 'react'
import { addProductToCartAction, removeProductToCartAction, removeProductUnitAction } from 'reducers/Cart/actions'
import { CartReducer } from 'reducers/Cart/reducer'
import { Coffee } from 'types/Coffee'

interface CartItem {
  product: Coffee
  amount: number
}

interface Delivery {
  street: string
  district: string
  number: number
  city: string
  uf: string
  paymentMethod: 'credit' | 'debit' | 'money'
}

interface CartContextData {
  cart: CartItem[]
  totalItems: number
  delivery: Delivery | null
  addProductToCart: (product: Coffee) => void
  removeProductUnitToCart: (id: string) => void
  removeProductToCart: (id: string) => void
  unitsPerProduct: (id: string) => number
  addDeliveryInformation: (information: Delivery) => void
}

interface CartProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    { cart: [] },
  )

  const [delivery, setDelivery] = useState<Delivery | null>(null)

  const { cart } = cartState
  const totalItems = cart.length

  const addProductToCart = (product: Coffee) => {
    dispatch(addProductToCartAction(product))
  }

  const removeProductUnitToCart = (title: string) => {
    dispatch(removeProductUnitAction(title))
  }

  const removeProductToCart = (title: string) => {
    dispatch(removeProductToCartAction(title))
  }

  const unitsPerProduct = (title: string) => {
    const cartItem = cart.find((item) => item.product.title === title)

    return cartItem?.amount ?? 0
  }

  const addDeliveryInformation = (information: Delivery) => {
    setDelivery(information)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        delivery,
        totalItems,
        addProductToCart,
        removeProductUnitToCart,
        removeProductToCart,
        unitsPerProduct,
        addDeliveryInformation
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
