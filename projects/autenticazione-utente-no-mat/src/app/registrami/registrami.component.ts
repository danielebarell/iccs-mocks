import { Component} from '@angular/core';

@Component({
  selector: 'hecos-registrami',
  template: `
    <form class="flex-form" #registratiForm="ngForm" [hidden]="!isViewForm" (submit)="isViewForm = false">
      <fieldset>
        <legend>Registrati</legend>
        <label for="email" class="required">Email</label>
        <div>
        <input id="email" type="email" name="email" ngModel required>
        </div>
        <label for="password" class="required">Nuova password</label>
        <div>
          <input id="password" name="password" ngModel required type="{{isPassword ? 'password' : 'text'}}">
          <button (click)="isPassword =!isPassword">
            <span class="material-icons">{{isPassword ? 'visibility_off' : 'visibility'}}</span>
          </button>
        </div>
          <label for="password-confirm" class="required">Conferma password</label>
        <div>
          <input id="password-confirm" name="password-confirm" ngModel type="{{isConfirmPassword ? 'password' : 'text'}}" required>
          <button (click)="isConfirmPassword =!isConfirmPassword">
            <span class="material-icons">{{isConfirmPassword ? 'visibility_off' : 'visibility'}}</span>
          </button>
        </div>
      </fieldset>
      <div class="flex-right">
        <button type="submit" [disabled]="registratiForm.invalid">Registrati</button>
      </div>
    </form>
    <div [hidden]="isViewForm">
      <pre>
        value: {{registratiForm.value | json}}
      </pre>
      <pre>
        valid ? {{registratiForm.valid}}
        submitted ? {{registratiForm.submitted}}
      </pre>
      <button (click)="registratiForm.reset(); isViewForm = true;">Indietro</button>
    </div>
  `,
  styleUrls: [
    './registrami.component.scss'
  ]
})
export class RegistramiComponent{
  isPassword = true;
  isConfirmPassword = true;
  isViewForm = true;
}
