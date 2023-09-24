import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FoodService } from 'src/app/services/food.service'
import { Food } from 'src/app/shared/models/food.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  donuts:Food[] = []
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.donuts = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
      }
      else if (params['tag']) {
        this.donuts = this.foodService.getAllFoodsByTag(params['tag'])
      } 
      else {
        this.donuts = foodService.getAll()
      }
    })

  }
  ngOnInit(): void {
  }
}
