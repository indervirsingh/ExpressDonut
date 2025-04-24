import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { Food } from '../../shared/models/food.model'
import { Tag } from '../../shared/models/tag.model'
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../../shared/constants/urls'


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private apiUrl = 'http://localhost:5100/api/foods';
  private mockFoods: Food[] = [
    {
      id: '1',
      name: 'Classic Glazed Donut',
      price: 2.99,
      favorite: true,
      stars: 4.8,
      imageUrl: '/assets/donuts/glazed.jpg',
      image_url: '/assets/donuts/glazed.jpg',
      tags: ['classic', 'glazed'],
    },
    {
      id: '2',
      name: 'Chocolate Sprinkle',
      price: 3.49,
      favorite: false,
      stars: 4.5,
      imageUrl: '/assets/donuts/chocolate-sprinkle.jpg',
      image_url: '/assets/donuts/chocolate-sprinkle.jpg',
      tags: ['chocolate', 'sprinkles'],
    },
    // Add 4-5 more mock entries
  ];

  constructor(private http: HttpClient) {}

  /**
   * Get all food items
   * @returns Observable array of Food items
   */
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL)
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL)
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAll() : 
      this.http.get<Food[]>(FOODS_BY_TAG_URL + tag)
  }

  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId)
  }

  // /**
  //  * Get food item by ID
  //  * @param id Food item ID
  //  * @returns Observable of Food item
  //  */
  // getById(id: string): Observable<Food> {
  //   const food = this.mockFoods.find(f => f.id === id);
  //   return food 
  //     ? of(food).pipe(delay(500)) 
  //     : throwError(() => 'Food not found');
  // }

  // /**
  //  * Search food items by term
  //  * @param term Search term
  //  * @returns Observable array of matching Food items
  //  */
  // searchFoods(term: string): Observable<Food[]> {
  //   if (!term.trim()) return of([]);
    
  //   const results = this.mockFoods.filter(food =>
  //     food.name.toLowerCase().includes(term.toLowerCase())
  //   );
    
  //   return of(results).pipe(delay(500));
  // }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => 
      'Failed to fetch food data. Please try again later.'
    );
  }
}
