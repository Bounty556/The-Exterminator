import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'ex-project-new-bug',
  templateUrl: './project-new-bug.component.html',
  styleUrls: ['./project-new-bug.component.css']
})
export class ProjectNewBugComponent implements OnInit {
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      bugDescription: this.formBuilder.control(''),
      bugRepro: this.formBuilder.control('')
    });
  }

  onSubmit(form) {

  }

  returnToProject() {
    
  }
}