import { model, Schema, Types } from 'mongoose'
import { Food, FoodSchema } from './food.model'

export interface LatLng {
    lat: string
    lng: string
}

export const LatLngSchema = new Schema<LatLng>(
    {
        lat: { type: String, required: true },
        lng: { type: String, required: true }
    }
)

export interface OrderItem {
    food: Food
    price: number
    quantity: number
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food: { type: FoodSchema, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }
)