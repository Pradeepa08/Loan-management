import { Component, OnInit } from '@angular/core';
import { ParamMap } from '@angular/router/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoanService } from "src/app/loan.service";

@Component({
  selector: 'app-loan-add',
  templateUrl: './loan-add.component.html',
  styleUrls: ['./loan-add.component.css']
})
export class LoanAddComponent implements OnInit {
    error: boolean;
    errorMessage: any;
  
  addForm: FormGroup;
  isAdded: boolean = false;
borrowerInformation:FormGroup;
  constructor(private service:LoanService) { }

  ngOnInit(): void {


    this.addForm = new FormGroup(
      {
borrowerInformation:new FormGroup({
        'firstName': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
        'lastName': new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]),
}),
        // 'loanNumber': new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
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
  }
  add(addForm:FormGroup):void {
  
    this.service.loanAdd(addForm.value).subscribe((data)=>{if(data!=null){this.isAdded=true}
    },(error)=>{
      if(error){
        this.error=true;
        this.errorMessage="error occured";
      }
    });
    
  }
}
