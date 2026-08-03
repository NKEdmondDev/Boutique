import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { ProductListComponent } from './components/product-list/product-list';
import { NewsletterComponent } from './components/newsletter/newsletter';
import { FooterComponent } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    ProductListComponent,
    NewsletterComponent,
    FooterComponent
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}