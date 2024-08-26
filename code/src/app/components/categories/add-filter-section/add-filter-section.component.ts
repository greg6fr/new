import { Component } from '@angular/core';

@Component({
  selector: 'app-add-filter-section',
  templateUrl: './add-filter-section.component.html',
  styleUrl: './add-filter-section.component.css'
})
export class AddFilterSectionComponent {
  categories = [
    {
      title: 'Forêt',
      description: 'Trouvez votre hébergement idéal au cœur de la magnifique forêt luxuriante...',
      image: 'assets/images/placeholder-image16@2x.png'
    },
    {
      title: 'Eau',
      description: 'Découvrez nos logements uniques en bord de l\'eau, situés dans des endroits pittoresques...',
      image: 'assets/images/placeholder-image17@2x.png'
    },
    {
      title: 'Avion',
      description: 'Vivez une expérience unique et inoubliable en séjournant dans un logement insolite aménagé à l\'intérieur même d\'un avion...',
      image: 'assets/images/placeholder-image3@2x.png'
    }
  ];
}
