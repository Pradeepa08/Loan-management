import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {
  role: String;
  constructor(private route: Router, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => { this.role = params.get('role') });
    console.log(this.role);
  }
  onSearch() {
    this.route.navigate(['/loan-search', this.role])
  }
  onAdd() {
    this.route.navigate(['/loan-add'])
  }
}
