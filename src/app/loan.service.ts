import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class LoanService {
  constructor(private http: HttpClient) { }
  search(): Observable<any> {
    console.log("loan");
    return this.http.get('./assets/loandetail.json')
  }
  login(): Observable<any> {
    console.log("loan");
    return this.http.get('./assets/userdetail.json')
  }
  searchByLoannumber(loannumber): Observable<any> {
    return this.http.get('./assets/loandetail.json')
  }
}
