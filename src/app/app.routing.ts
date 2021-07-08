import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./project-list/project-list.module').then(m => m.ProjectListModule) },
];

export const routing = RouterModule.forRoot(appRoutes);