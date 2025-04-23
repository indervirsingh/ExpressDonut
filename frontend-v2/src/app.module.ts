import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { TopbarComponent } from './app/core/components/topbar/topbar.component';
import { FooterComponent } from './app/core/components/footer/footer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    AppComponent,
    HomeComponent,
    TopbarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
