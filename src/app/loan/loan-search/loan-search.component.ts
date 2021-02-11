import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'
import { LoanService } from 'src/app/loan.service';

@Component({
  selector: 'app-loan-search',
  templateUrl: './loan-search.component.html',
  styleUrls: ['./loan-search.component.css']
})
export class LoanSearchComponent implements OnInit {
  loanDetails: any;
  firstName: string;
  lastName: string;
  loanNumber: number;
  isShown: boolean = false;
  shown: boolean = false;
  userdetail: any;
  role: String;
 
  constructor(private route: ActivatedRoute, private router: Router, private dataservice: LoanService, private routers: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routers.paramMap.subscribe((params: ParamMap) => { this.role = params.get('role') });
    if(this.role=="admin")
    {
     this.dataservice.search().subscribe((data) => {this.loanDetails=data,this.isShown = !this.isShown});
    }
  }
  loanSearch() {
      let Loan:any
    this.dataservice.search().subscribe((data) => {
    Loan = data;
  let search=Loan.filter( loan => loan.loanNumber==this.loanNumber || loan.firstName ==this.firstName || loan.lastName==this.lastName);
 this.loanDetails = search;
        this.isShown = !this.isShown; 
    });
  }
  edit(loanNumber) {
    this.router.navigate(['/loan-edit',loanNumber])
  }
}



