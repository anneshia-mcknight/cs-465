import { Component, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  error = '';
  loading = false;

  constructor(
    private authentication: Authentication,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit(): void {
    this.error = '';

    if (!this.email.trim() || !this.password) {
      this.error = 'Email and password are required.';
      return;
    }

    this.loading = true;

    this.authentication.login(this.email, this.password).subscribe({
      next: () => {
        this.loading = false;
        this.router.navigateByUrl('/');
      },
      error: () => {
        this.loading = false;
        this.error = 'Incorrect email or password.';
        this.cdr.detectChanges();
      }
    });
  }
}
