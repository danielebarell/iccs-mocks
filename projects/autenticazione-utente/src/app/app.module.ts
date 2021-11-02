import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RegistratiModule} from "./registrati/registrati.module";
import {LoginNavigationModule} from "./login-navigation/login-navigation.module";


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RegistratiModule,
        LoginNavigationModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
