import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialSharedModule} from "../material-shared.module";
import {RegistratiComponent} from "./registrati.component";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";

@NgModule({
  declarations:[RegistratiComponent],
  exports: [
    RegistratiComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialSharedModule
  ],
  providers:[
    {provide:MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill',floatLabel:'always'}}
  ]
})
export class RegistratiModule { }
