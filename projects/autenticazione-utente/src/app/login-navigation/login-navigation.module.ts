import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialSharedModule} from "../material-shared.module";
import { LoginNavigationComponent } from './login-navigation.component';



@NgModule({
    declarations: [
        LoginNavigationComponent
    ],
    exports: [
        LoginNavigationComponent
    ],
    imports: [
        CommonModule,
      MaterialSharedModule
    ]
})
export class LoginNavigationModule { }
