import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private authService: AuthService) {}

get isLoggedIn(): boolean {
  return this.authService.isLoggedIn;
}

logout(): void {
  this.authService.logout();
} }
