import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule],
    template: `
        <div class="error-page">
            <h1>404</h1>
            <p>Page not found</p>
            <a routerLink="/dashboard">Return to Dashboard</a>
        </div>
    `,
    styles: [`
        .error-page {
            text-align: center;
            padding: 2rem;
            margin-top: 5rem;
        }
    `]
})
export class NotfoundComponent {}
