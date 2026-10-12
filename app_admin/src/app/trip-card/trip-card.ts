
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-card',
  standalone: false,
  styleUrl: './trip-card.css',
  templateUrl: './trip-card.html',
})
export class TripCard {
  @Input() trip: any;

  @Output() editTrip = new EventEmitter<any>();

  onEdit(): void {
    this.editTrip.emit(this.trip);
  }
}

