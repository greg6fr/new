import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-posted-appartement',
  templateUrl: './card-posted-appartement.component.html',
  styleUrls: ['./card-posted-appartement.component.css']
})
export class CardPostedAppartementComponent {
  @Input() apartment: any;
}
