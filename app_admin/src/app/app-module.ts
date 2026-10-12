import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { App } from './app';
import { TripListing } from './trip-listing/trip-listing';
import { TripCard } from './trip-card/trip-card';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';

@NgModule({
  declarations: [App, TripListing, TripCard, AddTrip, EditTrip],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient()],
  bootstrap: [App],
})
export class AppModule {}
