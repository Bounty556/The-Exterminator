import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

interface ProjectListItem {
  name: string,
  lastUpdated: string,
  openBugs: number,
  solvedBugs: number,
  projectId: number
}

@Component({
  selector: 'project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  form: FormGroup;
  hideRecentHeader: boolean =  false;
  projects: ProjectListItem[] = [{
    name: 'Soul Game Engine',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 2',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 3',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 4',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  },
  {
    name: 'Soul Game Engine 5',
    lastUpdated: 'March 6th, 2021',
    openBugs: 73,
    solvedBugs: 140,
    projectId: 15
  }];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      projectName: this.formBuilder.control('')
    });
  }

  onSubmit(projectName) {
    this.hideRecentHeader = true;
  }
}