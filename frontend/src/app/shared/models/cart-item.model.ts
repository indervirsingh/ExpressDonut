import { Food } from "./food.model"
export class CartItem {

    constructor (public food: Food) { }

    quantity: number = 1
    price: number = this.food.price
}
