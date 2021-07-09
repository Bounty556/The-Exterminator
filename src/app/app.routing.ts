import { Routes, RouterModule } from "@angular/router";
import { LoginSignupComponent } from "./login-signup.component";

const appRoutes: Routes = [
  { path: 'projects', loadChildren: () => import('./project-list/project-list.module').then(m => m.ProjectListModule) },
  { path: 'create-project', loadChildren: () => import('./create-project/create-project.module').then(m => m.CreateProjectModule) },
  { path: 'my-account', loadChildren: () => import('./my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: 'login-signup', component: LoginSignupComponent },
  { path: '**', redirectTo: 'projects', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);