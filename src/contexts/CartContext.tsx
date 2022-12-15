import { createContext, ReactNode, useCallback, useReducer } from 'react'
import { produce } from 'immer'
import { Coffee } from 'types/Coffee'

interface CartItem {
  product: Coffee
  amount: number
}

interface CartContextData {
  cart: CartItem[]
  totalItems: number
  addProductToCart: (product: Coffee) => void
  removeProductUnitToCart: (id: string) => void
  removeProductToCart: (id: string) => void
  unitsPerProduct: (id: string) => number
}

interface CartProviderProps {
  children: ReactNode
}

interface CartState {
  cart: CartItem[]
}

export const CartContext = createContext({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cartState, dispatch] = useReducer(
    (state: CartState, action: any) => {
      switch (action.type) {
        case 'ADD_PRODUCT_TO_CART': {
          const cartItemIndex = state.cart.findIndex(
            (item) => item.product.title === action.payload.title,
          )

          if (cartItemIndex >= 0) {
            return produce(state, (draft) => {
              draft.cart[cartItemIndex].amount++
            })
          }

          return produce(state, (draft) => {
            draft.cart.push({
              product: action.payload,
              amount: 1,
            })
          })
        }

        case 'REMOVE_PRODUCT_UNIT': {
          const cartItemIndex = state.cart.findIndex(
            (item) => item.product.title === action.payload,
          )

          return produce(state, (draft) => {
            const amount = draft.cart[cartItemIndex].amount

            if (amount === 1) {
              draft.cart.splice(cartItemIndex, 1)
            } else {
              draft.cart[cartItemIndex].amount--
            }
          })
        }

        case 'REMOVE_PRODUCT_TO_CART': {
          const cartItemIndex = state.cart.findIndex(
            (item) => item.product.title === action.payload,
          )

          return produce(state, (draft) => {
            draft.cart.splice(cartItemIndex, 1)
          })
        }

        default:
          return state
      }
    },
    { cart: [] },
  )

  const { cart } = cartState
  const totalItems = cart.length

  const addProductToCart = (product: Coffee) => {
    dispatch({
      type: 'ADD_PRODUCT_TO_CART',
      payload: product,
    })
  }

  const removeProductUnitToCart = (title: string) => {
    dispatch({
      type: 'REMOVE_PRODUCT_UNIT',
      payload: title,
    })
  }

  const removeProductToCart = (title: string) => {
    dispatch({
      type: 'REMOVE_PRODUCT_TO_CART',
      payload: title,
    })
  }

  const unitsPerProduct = (title: string) => {
    const cartItem = cart.find((item) => item.product.title === title)

    return cartItem?.amount ?? 0
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        addProductToCart,
        removeProductUnitToCart,
        removeProductToCart,
        unitsPerProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
