import { Coffee } from "types/Coffee"
import { ActionType } from './actions'
import { produce } from 'immer'

interface CartItem {
    product: Coffee
    amount: number
}

interface CartState {
    cart: CartItem[]
}

interface Action {
    type: keyof typeof ActionType
    payload?: any
}

export function CartReducer(state: CartState, action: Action) {
    switch (action.type) {
        case ActionType.ADD_PRODUCT_TO_CART: {
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

        case ActionType.REMOVE_PRODUCT_UNIT: {
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

        case ActionType.REMOVE_PRODUCT_TO_CART: {
            const cartItemIndex = state.cart.findIndex(
                (item) => item.product.title === action.payload,
            )

            return produce(state, (draft) => {
                draft.cart.splice(cartItemIndex, 1)
            })
        }

        case ActionType.CLEAR_CART: {
            return produce(state, draft => {
                draft.cart = []
            })
        }

        default:
            return state
    }
}