import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { Food } from '../shared/models/food.model';
import { CartItem } from '../shared/models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart()
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  
  constructor() { }

  addToCart(food: Food):void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)

    if (cartItem) return
    else {
      this.cart.items.push(new CartItem(food))
    }
  }

  removeFromCart(foodId: string):void {
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  
}
