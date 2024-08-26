import { Component } from '@angular/core';

@Component({
  selector: 'app-list-posted-appartement',
  templateUrl: './list-posted-appartement.component.html',
  styleUrls: ['./list-posted-appartement.component.css']
})
export class ListPostedAppartementComponent {
  apartments = [
    {
      title: 'Tanière Boisée',
      description: 'Appartement spacieux avec vue imprenable sur la nature.',
      image: 'assets/images/placeholder-image@2x.png'
    },
    {
      title: 'Le vaiseau de l’infini',
      description: 'Appartement confortable avec accès facile aux sentiers de randonnée.',
      image: 'assets/images/placeholder-image1@2x.png'
    },
    {
      title: 'Le navire du pirate',
      description: 'Appartement moderne avec piscine privée et vue sur la forêt.',
      image: 'assets/images/placeholder-image2@2x.png'
    },
    {
      title: 'La tente de ma tante',
      description: 'Appartement écologique avec jardin biologique et panneaux solaires.',
      image: 'assets/images/placeholder-image3@2x.png'
    },
    {
      title: 'La ferme',
      description: 'Appartement rustique avec cheminée et vue sur la rivière.',
      image: 'assets/images/placeholder-image4@2x.png'
    },
    {
      title: 'La maison de la montagne',
      description: 'Appartement artistique avec décoration unique et atelier d\'art.',
      image: 'assets/images/placeholder-image5@2x.png'
    }
  ];
}
