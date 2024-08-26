import { Component } from '@angular/core';

@Component({
  selector: 'app-add-categories-section',
  templateUrl: './add-categories-section.component.html',
  styleUrl: './add-categories-section.component.css'
})
export class AddCategoriesSectionComponent {
  moreCategories = [
    {
      title: 'Bateaux',
      description: 'Des appartements incroyables situés dans de magnifiques bateaux, offrant une expérience de vie unique...',
      image: 'assets/images/placeholder-image18@2x.png'
    },
    {
      title: 'Yourtes',
      description: 'Découvrez notre vaste sélection de yourtes uniques, spacieuses et confortables...',
      image: 'assets/images/placeholder-image19@2x.png'
    },
    {
      title: 'Vans',
      description: 'Vivez une expérience unique en séjournant dans un van aménagé avec tout le confort nécessaire...',
      image: 'assets/images/placeholder-image20@2x.png'
    }
  ];
}
