import { Component, OnInit } from '@angular/core'
import { FoodService } from 'src/app/services/food.service'
import { Tag } from 'src/app/shared/models/tag.model'

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  standalone: false,
})
export class TagsComponent implements OnInit {

  tags?:Tag[]

  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags
    })
  }

  ngOnInit(): void {
  }
}
