import { Coffee } from 'types/Coffee'

export enum ActionType {
    ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART',
    REMOVE_PRODUCT_UNIT = 'REMOVE_PRODUCT_UNIT',
    REMOVE_PRODUCT_TO_CART = 'REMOVE_PRODUCT_TO_CART',
    CLEAR_CART = 'CLEAR_CART'
}

export function addProductToCartAction(coffee: Coffee) {
    return {
        type: ActionType.ADD_PRODUCT_TO_CART,
        payload: coffee
    }
}

export function removeProductToCartAction(title: string) {
    return {
        type: ActionType.REMOVE_PRODUCT_TO_CART,
        payload: title
    }
}

export function removeProductUnitAction(title: string) {
    return {
        type: ActionType.REMOVE_PRODUCT_UNIT,
        payload: title
    }
}

export function clearCartAction() {
    return {
        type: ActionType.CLEAR_CART
    }
}