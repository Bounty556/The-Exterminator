import { RouterModule, Routes } from "@angular/router";
import { ProjectNewBugComponent } from "./project-new-bug.component";
import { ProjectComponent } from "./project.components";

const projectRoutes: Routes = [
  { path: ':projectId/new-bug', component: ProjectNewBugComponent },
  { path: ':projectId', component: ProjectComponent }
];

export const projectRouting = RouterModule.forChild(projectRoutes);