import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = "https://6717c6c6b910c6a6e029ed90.mockapi.io/users";

  constructor(private http: HttpClient) {}

  login(userInput: any): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => {
        const user = users.find(user => 
          user.email === userInput.email && user.password === userInput.password
        );
        return user ? user : null; 
      }),
      catchError(() => of(false)) 
    );
  }

  getLoggedinData() {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }
}
