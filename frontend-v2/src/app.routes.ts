import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { NotfoundComponent } from './app/pages/notfound/notfound';
import { HomeComponent } from './app/pages/home/home.component';
// Define the main application routes using the AppLayout structure
export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout, // Main layout for authenticated/logged-in area
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' }, // Homepage
            { path: 'dashboard', component: Dashboard }, // Example: Load Dashboard directly
            // Example: Lazy load feature modules
            // { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'documentation', component: Documentation },
        ]
    },
    // Standalone pages outside the main layout
    { path: 'landing', component: Landing },
    // { path: 'auth', loadChildren: () => import('./pages/auth/auth.routes') },
    { path: 'notfound', component: NotfoundComponent },
    // Wildcard route redirects to the 'notfound' page
    { path: '**', redirectTo: '' }
];
