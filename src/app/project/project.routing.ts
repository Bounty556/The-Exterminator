import { RouterModule, Routes } from "@angular/router";
import { ProjectComponent } from "./project.components";

const projectRoutes: Routes = [
  { path: ':projectId', component: ProjectComponent }
];

export const projectRouting = RouterModule.forChild(projectRoutes);