import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { projectRouting } from "./project.routing";
import { ProjectComponent } from "./project.components";
import { ProjectNewBugComponent } from "./project-new-bug.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    projectRouting
  ],
  declarations: [
    ProjectComponent,
    ProjectNewBugComponent
  ]
})
export class ProjectModule {}