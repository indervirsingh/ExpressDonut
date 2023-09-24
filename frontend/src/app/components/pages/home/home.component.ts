import { Component, OnInit } from '@angular/core'
import { Food } from 'src/app/shared/models/Food'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  donuts:Food[] = []
  
  ngOnInit(): void {
  }
}
