import { Injectable } from '@angular/core'
import { donuts, tags } from 'src/data'
import { Tag } from '../shared/models/tag.model'
import { Food } from '../shared/models/food.model'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return donuts
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(donut => donut.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[] {
    return tags
  }

  getAllFoodsByTag(tag: string):Food[] {
    return tag === "All"?
    this.getAll(): 
    this.getAll().filter(donut => donut.tags?.includes(tag))
  }

  getFoodById(foodId: string):Food {
    return this.getAll().find(donut => donut.id == foodId) ?? new Food()
  }
}
