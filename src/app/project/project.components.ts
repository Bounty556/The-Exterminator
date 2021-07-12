import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'ex-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectId: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.projectId = paramMap.get('projectId');
    })
  }

  openNewBug() {
    this.router.navigate(['project/', this.projectId, 'new-bug'])
  }
}