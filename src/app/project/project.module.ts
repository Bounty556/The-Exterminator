import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { projectRouting } from "./project.routing";
import { ProjectComponent } from "./project.components";

@NgModule({
  imports: [
    CommonModule,
    projectRouting
  ],
  declarations: [
    ProjectComponent
  ]
})
export class ProjectModule {}