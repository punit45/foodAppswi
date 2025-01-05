import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl='https://6717c6c6b910c6a6e029ed90.mockapi.io/orders';
  constructor(private http:HttpClient) { }

  placeOrder(orderData:any):Observable<any>{
    
      return this.http.post(this.apiUrl, orderData).pipe(
        catchError(error => {
          console.error('Placing order Error:', error);
          return throwError(() => new Error('order failed; please try again later.'));
        })
      );
    
  }
  
}
