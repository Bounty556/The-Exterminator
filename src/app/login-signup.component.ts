import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'ex-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit {
  isSigningUp: boolean = true;
  firstPasswordValid: boolean = true;
  secondPasswordValid: boolean = true;
  passwordsMatch: boolean = true;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      repeatPassword: this.formBuilder.control(''),
      emailAddress: this.formBuilder.control(''),
      rememberMe: this.formBuilder.control(false)
    });
  }

  onSubmit(accountData) {
    console.log(accountData);
  }

  onChangeMethod() {
    this.isSigningUp = !this.isSigningUp;
    this.form.reset();
  }
}