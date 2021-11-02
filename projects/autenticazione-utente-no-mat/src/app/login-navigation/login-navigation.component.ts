import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hecos-login-navigation',
  template: `
    <ul class="list-horizontal pad-left">
      <li><button class="nav-button">LOGIN</button></li>
      <li><button class="nav-button">REGISTRATI</button></li>
      <li><a href="#" class="spid-button"><span class="spid-label">Entra con SPID</span></a></li>
    </ul>
  `,
  styleUrls: ["./login-navigation.component.scss"]
})
export class LoginNavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
