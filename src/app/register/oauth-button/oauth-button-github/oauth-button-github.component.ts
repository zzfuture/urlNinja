import { Component } from '@angular/core';
import { GithubSvgComponent } from './github-svg/github-svg.component';

@Component({
  selector: 'app-oauth-button-github',
  standalone: true,
  imports: [GithubSvgComponent],
  template: `
  <button>
  <app-github-svg></app-github-svg>
    Log in
  </button>
  `,
  styleUrl: './oauth-button-github.component.css'
})
export class OauthButtonGithubComponent {

}
