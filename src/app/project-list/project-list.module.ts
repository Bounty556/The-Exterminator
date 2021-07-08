import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectListComponent } from './project-list.component';
import { projectListRouting } from './project-list.routing';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    projectListRouting
  ],
  declarations: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
