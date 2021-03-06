import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "create-project",
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  form: FormGroup;
  projectManagers: string[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      projectName: this.formBuilder.control(''),
      projectDescription: this.formBuilder.control(''),
      privacyMode: this.formBuilder.control('Public')
    });
  }

  moveManager(event) {
    event.preventDefault();
  }

  onSubmit(form) {
    console.log(form);
  }
}