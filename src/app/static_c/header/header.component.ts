import { Component } from '@angular/core';
import { GithubSvgComponent } from "../../register/oauth-button/oauth-button-github/github-svg/github-svg.component";
import { ButtonLogoComponent } from "./button-logo/button-logo.component";

@Component({
    selector: 'app-header',
    standalone: true,
    template: `
    <app-button-logo></app-button-logo>
    <div id="info">
      <a href="/login">Sign in</a>
      <a href="https://github.com/zzfuture">
        <app-github-svg></app-github-svg>
      </a>
    </div>
  `,
    styles: `
  :host {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  #info {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  a {
    color: #e4e4e4;
    font-size: 18px;
  }

  app-github-svg {
    width: 40px;
  }
  `,
    imports: [GithubSvgComponent, ButtonLogoComponent]
})
export class HeaderComponent {

}
