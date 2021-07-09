import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list.component';
import { MyProjectsComponent } from './my-projects.component';
import { projectListRouting } from './project-list.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    projectListRouting
  ],
  declarations: [
    ProjectListComponent,
    MyProjectsComponent
  ]
})
export class ProjectListModule { }
