import { LatLng } from "leaflet"
import { CartItem } from "./cart-item.model"

export class Order {
    id!: number
    items!: CartItem[]
    totalPrice!: number
    name!: string
    address!: string
    adressLatLng?: LatLng
    paymentId!: string
    createdAt!: string
    status!: string
}
