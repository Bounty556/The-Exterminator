import { Routes, RouterModule } from "@angular/router";
import { LoginSignupComponent } from "./login-signup.component";

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./project-list/project-list.module').then(m => m.ProjectListModule) },
  { path: 'login-signup', component: LoginSignupComponent }
];

export const routing = RouterModule.forRoot(appRoutes);