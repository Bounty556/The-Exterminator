import { Routes, RouterModule } from "@angular/router";
import { CreateProjectComponent } from "./create-project.component";

const createProjectRoutes: Routes = [
  { path: '', component: CreateProjectComponent }
]

export const createProjectRouting = RouterModule.forChild(createProjectRoutes);