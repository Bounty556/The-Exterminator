import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { createProjectRouting } from "./create-project.routing";
import { CreateProjectComponent } from "./create-project.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    createProjectRouting
  ],
  declarations: [
    CreateProjectComponent
  ]
})
export class CreateProjectModule { }