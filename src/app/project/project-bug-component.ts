import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'ex-project-bug',
  templateUrl: './project-bug-component.html',
  styleUrls: ['./project-bug-component.css']
})
export class ProjectBugComponent implements OnInit {
  form: FormGroup;
  projectId: string;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      responseText: this.formBuilder.control(''),
      bugStatus: this.formBuilder.control('')
    });

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.projectId = paramMap.get('projectId');
    })
  }

  onSubmit(form) {

  }

  returnToProject() {
    this.router.navigate(['project', this.projectId]);
  }
}