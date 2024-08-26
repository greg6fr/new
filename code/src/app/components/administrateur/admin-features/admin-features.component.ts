import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-features',
  templateUrl: './admin-features.component.html',
  styleUrls: ['./admin-features.component.css']
})
export class AdminFeaturesComponent {
  adminFeatures = [
    {
      title: 'Gérer utilisateurs',
      heading: 'Gestion complète des utilisateurs',
      description1: 'Notre fonctionnalité CRUD vous permet de créer, lire, mettre à jour et supprimer facilement les utilisateurs.',
      description2: 'Simplifiez votre gestion et gagnez du temps avec AtypickHouse.',
      image: 'assets/images/gereUtilisateurs.png'
    },
    {
      title: 'Gérer rôles',
      heading: 'Gestion des rôles',
      description1: 'Grâce à cette fonctionnalité, vous pouvez désormais assigner, modifier ou retirer de nouveaux rôles aux utilisateurs.',
      description2: '',
      image: 'assets/images/rôles.png'
    },
    {
      title: 'Gérer réservations',
      heading: 'Gestion facile des réservations avec options d\'édition et de suppression',
      description1: 'AtypickHouse offre une fonctionnalité de gestion des annonces qui permet aux administrateurs de gérer facilement les propriétés.',
      description2: 'Avec des options d\'édition et de suppression, vous pouvez mettre à jour les informations des annonces et supprimer celles qui ne sont plus disponibles.',
      image: 'assets/images/gereReservations.png'
    }
  ];
}
