import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
@Component({
  selector: 'hecos-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.scss']
})
export class RegistratiComponent{
  userEmail = new FormControl('',[Validators.required, Validators.email]);
  isPasswordTextShown = false;
  isPasswordConfirmTextShown = false;
  getUserEmailError(){
      //console.log('userEmail',this.userEmail);
      if(this.userEmail.hasError('required')){
        return 'L\'indirizzo email è necessario';
      }else if(this.userEmail.hasError('email')){
        return 'L\' indirizzo email non è corretto';
      }
      return 'errore email generico';
  }

}
