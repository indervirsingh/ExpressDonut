import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    ApiService
  ]
})
export class CoreModule { }
