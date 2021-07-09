import { Routes, RouterModule } from "@angular/router";
import { MyAccountComponent } from './my-account.component';

const myAccountRoutes: Routes = [
  { path: '', component: MyAccountComponent }
];

export const myAccountRouting = RouterModule.forChild(myAccountRoutes);