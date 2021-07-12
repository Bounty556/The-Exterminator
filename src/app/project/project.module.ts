import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { projectRouting } from "./project.routing";
import { ProjectComponent } from "./project.components";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    projectRouting
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule {}