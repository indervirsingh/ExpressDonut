// frontend/src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Food } from '../../shared/models/food.model';
import { from, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardModule, ProgressSpinnerModule],
  template: `
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Donut Menu</h1>
      
      <div *ngIf="foods$ | async as foods; else loading" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <p-card *ngFor="let food of foods" [header]="food.name">
          <img [src]="food.imageUrl" [alt]="food.name" class="w-full h-48 object-cover mb-4">
          <div class="flex justify-between items-center">
            <span class="text-primary font-bold">\${{ food.price }}</span>
            <span class="pi pi-star" *ngIf="food.favorite"></span>
          </div>
          <div class="mt-2">
            <span *ngFor="let tag of food.tags" class="mr-2 text-sm text-gray-500">
              #{{ tag }}
            </span>
          </div>
        </p-card>
      </div>

      <ng-template #loading>
        <div class="flex justify-center p-8">
          <p-progressSpinner></p-progressSpinner>
        </div>
      </ng-template>
    </div>
  `
})
export class HomeComponent implements OnInit {
  foods$!: Observable<Food[]>;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.foods$ = this.ApiService.getAll();
  }
}