
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-edit-trip',
  standalone: false,
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip {
  @Input() trip: any;

  @Output() tripUpdated = new EventEmitter<void>();
  @Output() cancelEdit = new EventEmitter<void>();

  constructor(private tripData: TripData) {}

  onSubmit(): void {
    this.tripData.updateTrip(this.trip).subscribe({
      next: () => {
        alert('Trip updated successfully!');
        this.tripUpdated.emit();
      },
      error: (error) => {
        console.error('Error updating trip:', error);
        alert('Unable to update trip. Please try again.');
      }
    });
  }

  onCancel(): void {
    this.cancelEdit.emit();
  }
}

