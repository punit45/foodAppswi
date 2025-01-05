import { Component, EventEmitter, NgModule, Output, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SignupService } from '../services/signup/signup.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  signedupFailure: boolean = false;
  signedupSuccess: boolean = false;
  signupForm: FormGroup;

  // Form details using reactive forms 
  constructor(private fb: FormBuilder, private signupService: SignupService) {
    this.signupForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signupService.signup(this.signupForm.value).subscribe({
        // Success
        next: (response) => {
          console.log("Success", response);
          this.signedupSuccess = true;
          this.signedupFailure = false;
          this.openLogin.emit();
        },
        // Failure
        error: (error) => {
          console.log("Error");
          this.signedupFailure = true;
          this.signedupSuccess = false;
        }
      });
    } else {
      console.log("Form is invalid");
      this.signupForm.markAllAsTouched();
    }
  }

  // Getting functionality from navbarComponents
  @Output() close = new EventEmitter<void>();
  @Output() openLogin = new EventEmitter<void>();

  closeSignup() {
    this.close.emit();
  }

  openLogIn(event: Event) {
    event.preventDefault();
    this.openLogin.emit();
  }
}

