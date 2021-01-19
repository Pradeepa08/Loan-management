import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoanComponent } from "src/app/loan/loan.component";
describe('LoanComponent', () => {
  let component: LoanComponent;
  let fixture: ComponentFixture<LoanComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be search called', () => {
    expect(component.onSearch).toBeTruthy();
  });
  it('should be add called', () => {
    expect(component.onAdd).toBeTruthy();
  });
});