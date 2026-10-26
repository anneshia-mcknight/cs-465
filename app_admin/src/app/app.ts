import { Component, ViewChild } from '@angular/core';
import { TripListing } from './trip-listing/trip-listing';
import { Router } from '@angular/router';
import { Authentication } from './services/authentication';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  @ViewChild(TripListing) tripListing?: TripListing;
  reloadTrips(): void { this.tripListing?.loadTrips(); }
  constructor(
    public auth: Authentication,
    private router: Router
  ) {}

  isHomePage(): boolean {
    return this.router.url === '/';
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
