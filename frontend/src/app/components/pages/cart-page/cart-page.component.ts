import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/models/cart-item.model';
import { Cart } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  standalone: false,
})
export class CartPageComponent implements OnInit {
  cart!: Cart

  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => this.cart = cart)
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id)
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString)
    this.cartService.changeQuantity(cartItem.food.id, quantity)
  }
}
