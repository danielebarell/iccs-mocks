import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginNavigationModule } from "./login-navigation/login-navigation.module";
import { RegistramiModule } from "./registrami/registrami.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RegistramiModule,
    LoginNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
