import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

// ConstantService
import { ConstantService } from '../services/constant.service';

// การเรียกใช้งาน Model
import { User } from '../models/User';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class WebapiService {

  constructor(
    private constant: ConstantService,
    private http: HttpClient
  ) { } 

 // Http Options
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

// Handle API errors
  handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
  };

  // Check Login
  checkLogin(userdata): Observable<User> {
    return this.http
      .post<User>(this.constant.baseURLAPI + 'user/login', JSON.stringify(userdata), this.httpOptions)
      .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // ฟังก์ชันการดึงสินค้า
  getProduct(): Observable<Product>{
    return this.http.get<Product>(this.constant.baseURLAPI+'products')
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  // ฟังก์ดึงรายละเอียดสินค้าตาม id
  getProductByID(id): Observable<Product>{
    return this.http.get<Product>(this.constant.baseURLAPI+'product/'+id)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

}
