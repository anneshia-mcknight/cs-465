import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../models/auth-response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class Authentication {
  private readonly storageKey = 'travlr-token';
  private readonly apiUrl = '/api';
  private readonly token = signal(localStorage.getItem(this.storageKey) || '');

  constructor(private http: HttpClient) {}

  getToken(): string {
    return this.token();
  }

  saveToken(token: string): void {
    localStorage.setItem(this.storageKey, token);
    this.token.set(token);
  }

  logout(): void {
    localStorage.removeItem(this.storageKey);
    this.token.set('');
  }

  isLoggedIn(): boolean {
    const token = this.token();

    if (!token) {
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return typeof payload.exp === 'number' && payload.exp > Date.now() / 1000;
    } catch {
      return false;
    }
  }

  getCurrentUser(): User | null {
    if (!this.isLoggedIn()) {
      return null;
    }

    try {
      const payload = JSON.parse(atob(this.token().split('.')[1]));
      return {
        name: payload.name,
        email: payload.email
      };
    } catch {
      return null;
    }
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe(
      tap(response => this.saveToken(response.token))
    );
  }

  register(user: User, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, {
      ...user,
      password
    }).pipe(
      tap(response => this.saveToken(response.token))
    );
  }
}
