// frontend/src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Food } from '../../shared/models/food.model';
import { from, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    CardModule,
    ProgressSpinnerModule,
    ReactiveFormsModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    RatingModule,
    DialogModule
  ],
  template: `
    <div class="p-4">
      <h1 class="text-3xl font-bold mb-6">Donut Menu</h1>
      
      <div class="mb-6 flex flex-col sm:flex-row gap-4">
        <input 
          type="text" 
          [formControl]="searchControl"
          placeholder="Search donuts..." 
          pInputText
          class="w-full sm:w-96"
        >
        
        <p-dropdown 
          [options]="['All', 'Classic', 'Filled', 'Specialty']" 
          (onChange)="filterByCategory($event.value)"
          placeholder="Filter by category"
          class="w-full sm:w-64"
        ></p-dropdown>
      </div>

      <div *ngIf="foods$ | async as foods; else loading" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <p-card *ngFor="let food of foods" [header]="food.name">
          <div class="relative">
            <img [src]="food.imageUrl" [alt]="food.name" class="w-full h-48 object-cover mb-4">
            <p-rating 
              [ngModel]="food.stars" 
              [readonly]="true" 
              [cancel]="false"
              class="absolute top-2 right-2 bg-white/80 p-1 rounded"
            ></p-rating>
          </div>
          <div class="flex justify-between items-start mt-4">
            <div>
              <h3 class="text-xl font-semibold">{{ food.name }}</h3>
              <div class="flex gap-2 mt-2">
                <p-tag 
                  *ngFor="let tag of food.tags" 
                  [value]="tag" 
                  styleClass="mr-2"
                ></p-tag>
              </div>
            </div>
            <p-button 
              icon="pi pi-heart" 
              [text]="true" 
              [severity]="food.favorite ? 'danger' : 'secondary'"
              (click)="toggleFavorite(food)"
            ></p-button>
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
  searchControl = new FormControl('');
  currentFilter = 'All';

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.loadFoods(searchTerm, this.currentFilter);
    });
  }

  loadFoods(search = '', category = 'All') {
    this.foods$ = this.ApiService.getAll().pipe(
      map(foods => 
        foods.filter(food => 
          food.name.toLowerCase().includes(search.toLowerCase()) &&
          (category === 'All' || food.tags?.includes(category))
        )
      )
    );
  }

  filterByCategory(category: string) {
    this.currentFilter = category;
    this.loadFoods(this.searchControl.value, category);
  }

  toggleFavorite(food: Food) {
    food.favorite = !food.favorite;
  }
}