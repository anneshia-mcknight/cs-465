import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { App } from './app';
import { TripListing } from './trip-listing/trip-listing';
import { TripCard } from './trip-card/trip-card';
import { AddTrip } from './add-trip/add-trip';
import { EditTrip } from './edit-trip/edit-trip';
import { Login } from './login/login';
import { Register } from './register/register';
import { jwtInterceptor } from './utils/jwt-interceptor';

@NgModule({
  declarations: [
    App,
    TripListing,
    TripCard,
    AddTrip,
    EditTrip,
    Login,
    Register
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: TripListing },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withInterceptors([jwtInterceptor]))
  ],
  bootstrap: [App]
})
export class AppModule {}
