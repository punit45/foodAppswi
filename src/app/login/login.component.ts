import { Component, EventEmitter, Output } from '@angular/core';
import { LoginService } from '../services/login/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  user = { email: '', password: '' }; // Updated user object to use email and password
  loginFailed = false;

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit() {
    this.loginService.login(this.user).subscribe(
      (user) => {
        if (user) {
          this.loginFailed = false;
          this.close.emit();

          console.log(user);
          localStorage.setItem('user', JSON.stringify(user));
          this.router.navigate(['/']);
          window.location.reload();
        } else {
          this.loginFailed = true;
        }
      },
      () => {
        this.loginFailed = true;
      }
    );
  }

  @Output() close = new EventEmitter<void>();
  @Output() openSignup = new EventEmitter<void>();

  closeLogin() {
    this.close.emit();
  }

  openSignUp(event: Event) {
    event.preventDefault();
    this.openSignup.emit();
    console.log('Opening Signup modal');
  }
}
