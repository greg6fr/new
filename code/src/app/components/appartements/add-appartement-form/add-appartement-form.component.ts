import { Component } from '@angular/core';

@Component({
  selector: 'app-add-appartement-form',
  templateUrl: './add-appartement-form.component.html',
  styleUrls: ['./add-appartement-form.component.css']
})
export class AddAppartementFormComponent {
  appartement = {
    titre: '',
    categorie: '',
    adresse: '',
    personnes: null,
    equipements: '',
    disponibilite: '',
    prix: null,
    description: '',
    conditions: false
  };

  onSubmit() {
    // Handle form submission, e.g., send data to server
    console.log('Appartement ajouté:', this.appartement);
  }
}
