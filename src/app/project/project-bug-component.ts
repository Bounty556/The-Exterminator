import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'ex-project-bug',
  templateUrl: './project-bug-component.html',
  styleUrls: ['./project-bug-component.css']
})
export class ProjectBugComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      responseText: this.formBuilder.control(''),
      bugStatus: this.formBuilder.control('')
    });
  }

  onSubmit(form) {
  }
}