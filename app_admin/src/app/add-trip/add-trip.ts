


import { Component } from '@angular/core';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-add-trip',
  standalone: false,
  templateUrl: './add-trip.html',
  styleUrl: './add-trip.css'
})
export class AddTrip {
  trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(private tripData: TripData) {}

  onSubmit(): void {
    this.tripData.addTrip(this.trip).subscribe({
      next: (response) => {
        console.log('Trip added successfully:', response);
        alert('Trip added successfully!');
      },
      error: (error) => {
        console.error('Error adding trip:', error);
        alert('Unable to add trip. Please try again.');
      }
    });
  }
}
