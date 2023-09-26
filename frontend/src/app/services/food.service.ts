import { Injectable } from '@angular/core'
import { foods, tags } from 'src/data'
import { Tag } from '../shared/models/tag.model'
import { Food } from '../shared/models/food.model'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[] {
    return foods
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[] {
    return tags
  }

  getAllFoodsByTag(tag: string):Food[] {
    return tag === "All"?
    this.getAll(): 
    this.getAll().filter(food => food.tags?.includes(tag))
  }

  getFoodById(foodId: string):Food {
    return this.getAll().find(food => food.id == foodId) ?? new Food()
  }
}
