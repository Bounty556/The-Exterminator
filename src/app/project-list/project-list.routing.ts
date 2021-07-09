import { Routes, RouterModule } from '@angular/router';
import { MyProjectsComponent } from './my-projects.component';
import { ProjectListComponent } from './project-list.component';

const projectListRoutes: Routes = [
  { path: 'my-projects', component: MyProjectsComponent },
  { path: '', component: ProjectListComponent }
];

export const projectListRouting = RouterModule.forChild(projectListRoutes);