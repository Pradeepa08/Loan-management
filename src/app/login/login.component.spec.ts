import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { LoanComponent } from "src/app/loan/loan.component";
import { LoginComponent } from "src/app/login/login.component";
import { LoanService } from "src/app/loan.service";
import { Router } from "@angular/router";
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
    { provide: Router }
  ],
      declarations: [LoginComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
    })
      .compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be login called', () => {
    expect(component.logInUser).toBeTruthy();
  });
   it('should call the service  getStudents', fakeAsync(() => {
     let routerSpy = {navigate: jasmine.createSpy('navigate')};
  // component.userdetail.user={ "email": "pradee@gmail.com,"password":"password@12","role":"user"};
  
  let service: LoanService = TestBed.get(LoanService);
  
     expect (routerSpy.navigate).toHaveBeenCalledWith(['/loan']);
 
  
  
}));
});







