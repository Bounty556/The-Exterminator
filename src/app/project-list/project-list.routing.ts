import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list.component';

const projectListRoutes: Routes = [
  { path: '', component: ProjectListComponent }
];

export const projectListRouting = RouterModule.forChild(projectListRoutes);