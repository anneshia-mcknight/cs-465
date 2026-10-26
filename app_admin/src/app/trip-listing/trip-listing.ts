
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TripData } from '../services/trip-data';

@Component({
  selector: 'app-trip-listing',
  standalone: false,
  styleUrl: './trip-listing.css',
  templateUrl: './trip-listing.html',
})
export class TripListing implements OnInit {
  trips: any[] = [];
  selectedTrip: any = null;

  constructor(
    private tripData: TripData,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripData.getTrips().subscribe({
      next: (data) => {
        console.log('Trips received from API:', data);
        this.trips = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error retrieving trips:', error);
      }
    });
  }

  onEditTrip(trip: any): void {
    this.selectedTrip = {
      ...trip,
      start: trip.start ? trip.start.substring(0, 10) : ''
    };
  }

  onTripUpdated(): void {
    this.selectedTrip = null;
    this.loadTrips();
  }
}

