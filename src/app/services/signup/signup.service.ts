import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

interface User {
  name: string;
  email: string;
  phoneNumber: string;
  password: string; 
}

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = "https://6717c6c6b910c6a6e029ed90.mockapi.io/users";

  constructor(private http: HttpClient) { }

  signup(data: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, data).pipe(
      catchError(error => {
        console.error('Signup error:', error);
        return throwError(() => new Error('Signup failed; please try again later.'));
      })
    );
  }
}
