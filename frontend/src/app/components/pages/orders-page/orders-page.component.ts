import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { OrderService } from 'src/app/services/order.service'
import { Order } from 'src/app/shared/models/order.model'

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.css']
})
export class OrdersPageComponent implements OnInit {

  orders: Order[] = []

  constructor(activatedRoute: ActivatedRoute, private orderService: OrderService) { 
    let ordersObservable: Observable<Order[]>
    ordersObservable = orderService.getAll()

    ordersObservable.subscribe((serverOrders) => {
      this.orders = serverOrders
    })
  }
  ngOnInit(): void {
  }

}
