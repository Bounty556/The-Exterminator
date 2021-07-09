import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { myAccountRouting } from "./my-account.routing";

@NgModule({
  imports: [
    CommonModule,
    myAccountRouting
  ]
})
export class MyAccountModule {}