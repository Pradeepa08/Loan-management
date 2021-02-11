import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LoanService } from 'src/app/loan.service';
import { loandetail } from 'src/app/models/loandetail';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})
export class LoanEditComponent implements OnInit {
    isAdded: boolean;
    errorMessage: string;
    error: boolean;
 
  loanNumber: string;
  loandetail: loandetail;
  borrowerInformation:FormGroup;
editForm = new FormGroup(
        {
          borrowerInformation:new FormGroup({
        'firstName': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'lastName': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
}),
        'loanNumber': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        'loanManagementFees': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        'propertyAddress': new FormControl('', [Validators.required]),
        'loanAmount': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
        'loanType': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'loanTerm': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z,0-9, ]*$')]),
        'loanStatus': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'originationDate': new FormControl('', [Validators.required, Validators.pattern('^[0-9,/]*$')]),
        'originationAccount': new FormControl('', [Validators.required, Validators.pattern('^[0-9,-]*$')]),
        }
      );
  constructor(private router: ActivatedRoute, private service: LoanService) {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => { this.loanNumber = params.get('loanNumber') });
    this.service.searchByLoannumber(this.loanNumber).subscribe((data) => {
 this.editForm = new FormGroup(
        {
          borrowerInformation:new FormGroup({
        'firstName': new FormControl(data.borrowerInformation.firstName, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'lastName': new FormControl(data.borrowerInformation.lastName, [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
}),
        'loanNumber': new FormControl(data['loanNumber'], [Validators.required, Validators.pattern('^[0-9]*$')]),
        'loanManagementFees': new FormControl(data['loanManagementFees'], [Validators.required, Validators.pattern('^[0-9]*$')]),
        'propertyAddress': new FormControl(data['propertyAddress'], [Validators.required]),
        'loanAmount': new FormControl(data['loanAmount'], [Validators.required, Validators.pattern('^[0-9]*$')]),
        'loanType': new FormControl(data['loanType'], [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'loanTerm': new FormControl(data['loanTerm'], [Validators.required, Validators.pattern('^[a-zA-Z,0-9, ]*$')]),
        'loanStatus': new FormControl(data['loanStatus'], [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'originationDate': new FormControl(data['originationDate'], [Validators.required, Validators.pattern('^[0-9,/]*$')]),
        'originationAccount': new FormControl(data['originationAccount'], [Validators.required, Validators.pattern('^[0-9,-]*$')]),
        }
      );
    });
  
  }

  edit(editForm,loanNumber) {
    
     this.service.loanUpdate(editForm.value,loanNumber).subscribe((data)=>{if(data!=null){this.isAdded=true}
    },(error)=>{
      if(error){
        this.error=true;
        this.errorMessage="error occured";
      }
    });
 
  }
  update(){
   
  }
}
