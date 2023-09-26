import { CartItem } from "./cart-item.model"

export class Cart {
    items: CartItem[] = []
    totalPrice: number = 0
    totalCount: number = 0
}
