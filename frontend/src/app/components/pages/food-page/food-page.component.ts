import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FoodService } from 'src/app/services/food.service'
import { Food } from 'src/app/shared/models/food.model'
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
  standalone: false,
})
export class FoodPageComponent implements OnInit {

  food!: Food

  constructor(activatedRoute: ActivatedRoute, foodService: FoodService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        foodService.getFoodById(params['id']).subscribe(serverFood => {
          this.food = serverFood
        })
      }
    })
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
