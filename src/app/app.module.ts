import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProjectListModule } from './project-list/project-list.module';

import { AppComponent } from './app.component';

import { routing } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './login-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    ProjectListModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
