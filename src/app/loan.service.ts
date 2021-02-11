import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoanService {
    handleError: any;
    loggedin: boolean;
    token: any;
    users: any;
  constructor(private http: HttpClient,private router:Router) { }

  login(userId,password) {
    this.http.get("http://localhost:9090/login-service/login/" + userId).subscribe((data)=>
{
  this.users=data;
  if(this.users.role=="admin"&&this.users.userId==userId&&this.users.password==password)
  {
    this.token=this.users.token;
    this.loggedin=true;
     this.router.navigate(['/loan', this.users.role]);
  }
 if(this.users.role=="user"&&this.users.userId==userId&&this.users.password==password)
  {
    this.token=this.users.token;
    this.loggedin=true;
  
     this.router.navigate(['/loan', this.users.role]);
  }
   if(this.users.userId!=userId||this.users.password!=password){
  window.alert('Please check the credential !');
   }
},
  (error)=>{   
         if(error.status == 404){
           window.alert('Please check the UserId');
         }
         else if(error.status == 500){
          window.alert('Please check the UserId');
        }
  }

);  
  };
  
  searchByLoannumber(loanNumber): Observable<any> {
     const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
      return this.http.get("http://localhost:9090/loan-service/loan/"+loanNumber,httpOptions );
  };
    search(): Observable<any> {
      const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
      return this.http.get("http://localhost:9090/loan-service/loan",httpOptions);  
  };
  loanUpdate( editForm,loanNumber): Observable<any>{
const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    };
    
   return this.http.put("http://localhost:9090/loan-service/loan/"+loanNumber,editForm,httpOptions);
  
  };
  loanAdd( addForm): Observable<any>{
    console.log(addForm);
const httpOptions={
  headers: new HttpHeaders({
    'content-type':'application/json',
    'Authorization': 'Bearer ' + this.token
  })
};
   return  this.http.post("http://localhost:9090/loan-service/loan/add",addForm,httpOptions);
    
  }
}
