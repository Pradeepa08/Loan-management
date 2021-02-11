
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoanEditComponent } from "src/app/loan/loan-search/loan-edit/loan-edit.component";
import { LoanService } from "src/app/loan.service";
describe('LoanEditComponent', () => {
  let component: LoanEditComponent;
  let fixture: ComponentFixture<LoanEditComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
      declarations: [ LoanEditComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
   
   it('should have edit function', () => {
    expect(component.edit).toBeTruthy();
  });
 
  
});
