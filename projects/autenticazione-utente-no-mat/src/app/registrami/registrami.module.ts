import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { RegistramiComponent } from './registrami.component';

@NgModule({
  declarations: [
    RegistramiComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegistramiComponent
  ]
})
export class RegistramiModule { }
