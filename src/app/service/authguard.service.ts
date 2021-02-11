import { Injectable } from '@angular/core';
import { Observable, Observer } from "rxjs";
import { Router } from "@angular/router";
import { LoanService } from "src/app/loan.service";


@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router,
    private service: LoanService) { }
   
   canActivate(): boolean {
    return Observable.create((observer: Observer<boolean>) => {
      if (this.service.loggedin) {
        observer.next(true);
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
