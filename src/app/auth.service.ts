// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  login(username: string, password: string): boolean {
    if (username === 'root' && password === 'root') {
      this.isLoggedIn = true;
    }
    return true; 
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
