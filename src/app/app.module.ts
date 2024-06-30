import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Parent01Component } from './parent01/parent01.component';
import { Child01Component } from './parent01/child01/child01.component';
import { Child02Component } from './parent01/child02/child02.component';
import { Parent02Component } from './parent02/parent02.component';
import { User01Component } from './admin/user01/user01.component';
import { Auth01Component } from './auth/auth01/auth01.component';

@NgModule({
  declarations: [
    AppComponent,
    Parent01Component,
    Child01Component,
    Child02Component,
    Parent02Component,
    User01Component,
    Auth01Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
