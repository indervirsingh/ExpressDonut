// frontend/src/app/pages/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core/services/api.service';
import { Food } from '../../shared/models/food.model';
import { from, Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, catchError, finalize, map } from 'rxjs/operators';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    DropdownModule,
    CardModule,
    ProgressSpinnerModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    DialogModule
  ]
})
export class HomeComponent implements OnInit {
  foods$!: Observable<Food[]>;
  searchControl = new FormControl('');
  currentFilter = 'All';
  isLoading = false;
  errorMessage: string | undefined = undefined;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadFoods();
    
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.loadFoods(searchTerm ?? '', this.currentFilter);
    });
  }

  loadFoods(search = '', category = 'All'): void {
    this.isLoading = true;
    this.errorMessage = undefined;

    this.foods$ = this.apiService.getAll().pipe(
      map(foods => 
        foods.filter(food => 
          food.name.toLowerCase().includes(search.toLowerCase()) &&
          (category === 'All' || (food.tags && food.tags.includes(category)))
        )
      ),
      catchError(err => {
        console.error('Error loading food data:', err);
        this.errorMessage = 'Failed to load donuts. Please try again later.';
        return of([]);
      }),
      finalize(() => {
        this.isLoading = false;
      })
    );
  }

  filterByCategory(category: string): void {
    this.currentFilter = category;
    this.loadFoods(this.searchControl.value ?? '', category);
  }

  toggleFavorite(food: Food): void {
    food.favorite = !food.favorite;
  }
}