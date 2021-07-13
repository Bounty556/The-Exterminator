import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { projectRouting } from "./project.routing";
import { ProjectComponent } from "./project.components";
import { ProjectNewBugComponent } from "./project-new-bug.component";
import { ProjectBugComponent } from "./project-bug-component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    projectRouting
  ],
  declarations: [
    ProjectComponent,
    ProjectNewBugComponent,
    ProjectBugComponent
  ]
})
export class ProjectModule {}