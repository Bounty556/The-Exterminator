import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'ex-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  changeUsernameForm: FormGroup;
  changePasswordForm: FormGroup;
  changeEmailForm: FormGroup;
  dangerZoneForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.changeUsernameForm = this.formBuilder.group({
      newUsername: this.formBuilder.control(''),
      newUsernamePassword: this.formBuilder.control('')
    });

    this.changePasswordForm = this.formBuilder.group({
      newPasswordCurrent: this.formBuilder.control(''),
      newPassword: this.formBuilder.control(''),
      newPasswordConfirm: this.formBuilder.control('')
    });

    this.changeEmailForm = this.formBuilder.group({
      newEmail: this.formBuilder.control(''),
      newEmailPassword: this.formBuilder.control('')
    });

    this.dangerZoneForm = this.formBuilder.group({
      dangerZonePassword: this.formBuilder.control('')
    });
  }

  changeUsername(form) {

  }

  changePassword(form) {

  }

  changeEmail(form) {

  }

  deleteAccount(form) {

  }

  removeAllProjects(form) {

  }
}