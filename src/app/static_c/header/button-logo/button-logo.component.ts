import { Component } from '@angular/core';

@Component({
  selector: 'app-button-logo',
  standalone: true,
  imports: [],
  template: `
    <img id="logo" src="../../assets/icons/logo.webp" alt="logo_urlninja">
    <span id="brand">urlNinja</span>
  `,
  styles: `
    :host {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    #logo {
      width: 40px;
    }
    #brand {
      color: #e5e5e5;
      font-size: 22px;
    }
  `
})
export class ButtonLogoComponent {

}
