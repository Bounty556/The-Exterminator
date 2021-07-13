import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'ex-project-new-bug',
  templateUrl: './project-new-bug.component.html',
  styleUrls: ['./project-new-bug.component.css']
})
export class ProjectNewBugComponent implements OnInit {
  form: FormGroup;
  projectId: string;
  
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      bugDescription: this.formBuilder.control(''),
      bugDetails: this.formBuilder.control('')
    });

    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        this.projectId = paramMap.get('projectId');
      });
  }

  onSubmit(form) {
    
  }

  returnToProject() {
    this.router.navigate(['project/', this.projectId]);
  }
}