import { Routes } from '@angular/router';
import { Documentation } from './documentation/documentation';
import { Empty } from './empty/empty';
import { HomeComponent } from './home/home.component';

export default [
    { path: 'documentation', component: Documentation },
    { path: 'empty', component: Empty },
    { path: '**', redirectTo: '/notfound' },
    { path: 'home', component: HomeComponent }
] as Routes;
