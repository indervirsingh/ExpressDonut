import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, ViewChild, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/shared/models/food.model';
import { ApiService } from 'src/app/core/services/api.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Tag } from '../../shared/models/tag.model';
import { FormsModule } from '@angular/forms';

// PrimeNG imports
import { DataViewModule } from 'primeng/dataview';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { TooltipModule } from 'primeng/tooltip';
import { BadgeModule } from 'primeng/badge';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { SkeletonModule } from 'primeng/skeleton';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    DataViewModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    PaginatorModule,
    RatingModule,
    TooltipModule,
    BadgeModule,
    TagModule,
    DividerModule,
    RippleModule,
    SkeletonModule,
    InputNumberModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    foods: Food[] = [];
    allFoods: Food[] = [];
    tags: Tag[] = [];
    currentPage: number = 1;
    pageSize: number = 9;
    totalPages: number = 1;
    showFilters: boolean = false;
    isMobile: boolean = false;
    searchTerm: string = '';
    @ViewChild('searchInput') searchInput!: ElementRef;

    // PrimeNG specific properties
    sortOptions = [
        { label: 'Price: Low to High', value: 'price-asc' },
        { label: 'Price: High to Low', value: 'price-desc' },
        { label: 'Name: A to Z', value: 'name-asc' }
    ];

    selectedSortOption: any = null;
    first: number = 0;

    private destroy$ = new Subject<void>();

    minPrice: number | null = null;
    maxPrice: number | null = null;

    constructor(
        private ApiService: ApiService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private cdr: ChangeDetectorRef
    ) {}

    @HostListener('window:resize', ['$event'])
    onResize(event: UIEvent) {
        this.checkScreenSize();
        // Fix styling on resize
        this.fixStylingAfterNavigation();
    }

    ngOnInit(): void {
        this.checkScreenSize();
        this.ApiService.getAllTags().subscribe(serverTags => {
            this.tags = serverTags;
        });

        this.activatedRoute.paramMap
            .pipe(takeUntil(this.destroy$))
            .subscribe(params => {
                console.log('Route params:', params);
                let foodsObservable: Observable<Food[]>;

                if (params.has('searchTerm')) {
                    const searchParam = params.get('searchTerm') || '';
                    this.searchTerm = searchParam;
                    console.log('Search term from route:', this.searchTerm);
                    foodsObservable = this.ApiService.getAllFoodsBySearchTerm(searchParam);

                    // Set the search input value with a delay to ensure the view is initialized
                    this.fixStylingAfterNavigation();
                } else if (params.has('tag')) {
                    const tagParam = params.get('tag') || '';
                    console.log('Tag from route:', tagParam);
                    foodsObservable = this.ApiService.getAllFoodsByTag(tagParam);
                } else {
                    console.log('No search term or tag, getting all foods');
                    this.searchTerm = '';
                    foodsObservable = this.ApiService.getAll();
                }

                foodsObservable
                    .pipe(takeUntil(this.destroy$))
                    .subscribe(
                        (serverFoods) => {
                            console.log('Received foods from server:', serverFoods.length);
                            this.allFoods = serverFoods;

                            // Reset pagination
                            this.first = 0;
                            this.currentPage = 1;
                            this.calculateTotalPages();
                            this.updateFoodsList();

                            // Fix any styling issues
                            this.fixStylingAfterNavigation();
                        },
                        (error) => {
                            console.error('Error fetching foods:', error);
                        }
                    );
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    checkScreenSize(): void {
        this.isMobile = window.innerWidth < 768;
        this.showFilters = !this.isMobile;

        if (window.innerWidth < 480) {
            this.pageSize = 6;
        } else if (window.innerWidth < 768) {
            this.pageSize = 8;
        } else {
            this.pageSize = 9;
        }

        if (this.allFoods.length > 0) {
            this.calculateTotalPages();
            this.updateFoodsList();
        }
    }

    toggleFilters(): void {
        this.showFilters = !this.showFilters;
    }

    search(term: string): void {
        this.searchTerm = term.trim();
        console.log('Search term:', this.searchTerm);

        if (this.searchTerm) {
            console.log('Navigating to search route with term:', this.searchTerm);
            this.router.navigate(['/', 'search', this.searchTerm], {
                skipLocationChange: true
            });
            this.currentPage = 1;

            this.ApiService.getAllFoodsBySearchTerm(this.searchTerm)
                .subscribe(foods => {
                    this.allFoods = foods;
                    this.calculateTotalPages();
                    this.updateFoodsList();

                    this.fixStylingAfterNavigation();
                });
        } else {
            console.log('Empty search, navigating to products');
            this.router.navigate(['/', 'products']);
        }
    }

    filterProductsLocally(term: string): void {
        this.searchTerm = term.trim();

        if (!this.searchTerm) {
            this.ApiService.getAll().subscribe(foods => {
                this.allFoods = foods;
                this.currentPage = 1;
                this.updateFoodsList();
                this.calculateTotalPages();
            });
            return;
        }

        this.ApiService.getAll().subscribe(allFoods => {
            this.allFoods = allFoods.filter(food =>
                food.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                food.tags?.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()))
            );
            this.currentPage = 1;
            this.updateFoodsList();
            this.calculateTotalPages();
        });
    }

    clearSearch(): void {
        this.searchTerm = '';
        if (this.searchInput) {
            this.searchInput.nativeElement.value = '';
        }
        this.ApiService.getAll().subscribe(foods => {
            this.allFoods = foods;
            this.calculateTotalPages();
            this.updateFoodsList();
            this.router.navigate(['/', 'products']);

            this.fixStylingAfterNavigation();
        });
    }

    sortProducts(event: any): void {
        let value = event.value ? event.value : 'default';

        switch(value) {
            case 'price-asc':
                this.allFoods.sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
                break;
            case 'price-desc':
                this.allFoods.sort((a, b) => (b.price ?? 0) - (a.price ?? 0));
                break;
            case 'name-asc':
                this.allFoods.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));
                break;
            default:
                break;
        }

        this.currentPage = 1;
        this.first = 0;
        this.updateFoodsList();
    }

    onPageChange(event: any): void {
        this.first = event.first;
        this.pageSize = event.rows;
        this.currentPage = event.page + 1;
        this.updateFoodsList();

        if (this.isMobile) {
            setTimeout(() => {
                const productsGrid = document.querySelector('.p-dataview');
                productsGrid?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }

    calculateTotalPages(): void {
        this.totalPages = Math.ceil(this.allFoods.length / this.pageSize);
    }

    getPages(): number[] {
        const pages: number[] = [];
        const maxPagesToShow = this.isMobile ? 3 : 5;

        if (this.totalPages <= maxPagesToShow) {
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
        } else {
            if (this.currentPage <= 2) {
                for (let i = 1; i <= 3; i++) {
                    pages.push(i);
                }
                if (!this.isMobile) {
                    pages.push(this.totalPages);
                }
            } else if (this.currentPage >= this.totalPages - 1) {
                if (!this.isMobile) {
                    pages.push(1);
                }
                for (let i = this.totalPages - 2; i <= this.totalPages; i++) {
                    pages.push(i);
                }
            } else {
                if (!this.isMobile) {
                    pages.push(1);
                }
                for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
                    if (i > 0 && i <= this.totalPages) {
                        pages.push(i);
                    }
                }
                if (!this.isMobile) {
                    pages.push(this.totalPages);
                }
            }
        }

        return pages;
    }

    updateFoodsList(): void {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.foods = this.allFoods.slice(startIndex, endIndex);
        console.log('Updated foods list:', this.foods.length, 'items from', startIndex, 'to', endIndex);
    }

    // Method to fix styling issues after navigation
    private fixStylingAfterNavigation(): void {
        setTimeout(() => {
            // Fix search input styling
            if (this.searchInput && this.searchInput.nativeElement) {
                this.searchInput.nativeElement.value = this.searchTerm;

                // Fix search input width
                const searchContainer = document.querySelector('.search-container');
                if (searchContainer) {
                    searchContainer.classList.add('w-full');
                }

                // Fix dropdown width
                const sortContainer = document.querySelector('.sort-container');
                if (sortContainer && window.innerWidth >= 640) {
                    sortContainer.classList.add('w-44');
                } else if (sortContainer) {
                    sortContainer.classList.add('w-full');
                }
            }

            this.cdr.detectChanges();
        }, 100);
    }

    applyPriceFilter() {
        // Filter products based on price range
        this.ApiService.getAll().subscribe(allFoods => {
            this.allFoods = allFoods.filter(food => {
                const price = food.price ?? 0;
                const meetsMinPrice = this.minPrice === null || price >= this.minPrice;
                const meetsMaxPrice = this.maxPrice === null || price <= this.maxPrice;
                return meetsMinPrice && meetsMaxPrice;
            });

            this.currentPage = 1;
            this.first = 0;
            this.calculateTotalPages();
            this.updateFoodsList();
        });
    }
}
