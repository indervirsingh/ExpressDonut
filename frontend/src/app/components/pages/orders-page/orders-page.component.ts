import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { OrderService } from 'src/app/services/order.service'
import { UserService } from 'src/app/services/user.service'
import { Order } from 'src/app/shared/models/order.model'
import { User } from 'src/app/shared/models/user.model'

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  userOrders: Order[] = []
  user!: User

  constructor(private orderService: OrderService, private userService: UserService) {  
    this.user = userService.currentUser
  }
  ngOnInit(): void {
    this.orderService.getAll().subscribe({
      next: (serverOrders) => {
        this.userOrders = serverOrders.filter(order => {
          return order.name.includes(this.user.name)
        })

      }
    })
  }

}
