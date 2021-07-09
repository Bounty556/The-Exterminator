import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { myAccountRouting } from "./my-account.routing";
import { ReactiveFormsModule } from "@angular/forms";
import { MyAccountComponent } from "./my-account.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    myAccountRouting
  ],
  declarations: [
    MyAccountComponent
  ]
})
export class MyAccountModule {}