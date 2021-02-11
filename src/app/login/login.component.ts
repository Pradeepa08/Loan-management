import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginModel } from './login.model';
import { LoanService } from "src/app/loan.service";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: any;
  result: any;
  userdetail: any
  userId: number;
  password: string;
  role: string;
  errorMessage: any;
  loggedin:boolean;
 
  login = new LoginModel();

  constructor(private route: ActivatedRoute, private router: Router, private dataservice: LoanService,private http:HttpClient) { }

  logInUser() {
    this.dataservice.login(this.userId,this.password);
  }
  ngOnInit(): void {
  }
}