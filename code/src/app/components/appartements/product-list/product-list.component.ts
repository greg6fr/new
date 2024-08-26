import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Tanière Boisée', description: 'Tanière boisée d\'une incroyable beauté...', price: 150, image: 'assets/images/placeholder-image5@2x.png' },
    { name: 'Vaisseau de l\'infini', description: 'Vaisseau de l\'infini avec un confort...', price: 510, image: 'assets/images/placeholder-image21@2x.png' },
    // Add more products as needed
  ];
}
