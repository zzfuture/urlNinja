import { Component } from '@angular/core';
import { GoogleSvgComponent } from './google-svg/google-svg.component';

@Component({
  selector: 'app-oauth-button-google',
  standalone: true,
  imports: [GoogleSvgComponent],
  styleUrl: './oauth-button-google.component.css',
  template: `
  <button>
  <app-google-svg></app-google-svg>
    Log in
  </button>
  `,
})
export class OauthButtonGoogleComponent {
}
