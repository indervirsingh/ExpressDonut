import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Assuming TopbarComponent and FooterComponent are standalone or imported via another module
// If they are standalone, import them here:
// import { TopbarComponent } from './app/core/components/topbar/topbar.component';
// import { FooterComponent } from './app/core/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true, // Make the root component standalone
  imports: [
    RouterOutlet,
    // Add imports for standalone TopbarComponent and FooterComponent if needed
    // TopbarComponent,
    // FooterComponent,
  ],
  templateUrl: './app.component.html', // Use the external template file
//   styleUrls: ['./app.component.css'] // Keep using the CSS file
})
export class AppComponent {
  title = 'Express Donut'; // Or your actual app title
}   
