import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn = false;
  checkoutForm = this.formBuilder.group({
    name: '',
    password: ''
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  
  onSubmit(): void {
    const username = this.checkoutForm.get('name')?.value;
    const password = this.checkoutForm.get('password')?.value;

    if (username && password) {
      if (this.authService.login(username, password)) {
        // Connexion réussie
        this.router.navigate(['/']);
      } else {
        window.alert('Mauvais nom d\'utilisateur ou mot de passe');
      }
    }
  }
}