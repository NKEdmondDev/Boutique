import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products: Product[] = [

  { id: 1, name: 'Coureur  Airflex', price: 89, image: 'img/produit1.webp' },
  { id: 2, name: 'Urban Street Pro', price: 95, image: 'img/produit2.webp' },
  { id: 3, name: 'Court classique des annees 90', price: 105, image: 'img/produit3.webp' },
  { id: 4, name: 'Volt Edge', price: 92, image: 'img/produit4.webp' },

  { id: 5, name: 'Flux Zenital', price: 98, image: 'img/produit5.webp' },
  { id: 6, name: 'Street Vibe Low', price: 120, image: 'img/produit6.webp' },
  { id: 7, name: 'Nova Horizon', price: 87, image: 'img/produit7.webp' },
  { id: 8, name: 'Reaction Pulsee', price: 115, image: 'img/produit8.webp' },

  { id: 9, name: 'Core Street Retro', price: 99, image: 'img/produit9.webp' },
  { id: 10, name: 'AeroFlex Lite', price: 109, image: 'img/produit10.webp' },
  { id: 11, name: 'Produit 11', price: 90, image: 'img/produit11.webp' },
  { id: 12, name: 'Produit 12', price: 125, image: 'img/produit12.webp' }

];

}