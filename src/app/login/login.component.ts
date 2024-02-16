import { Component } from '@angular/core';

import { OauthButtonGoogleComponent } from "../register/oauth-button/oauth-button-google/oauth-button-google.component";
import { OauthButtonGithubComponent } from '../register/oauth-button/oauth-button-github/oauth-button-github.component';

import { OauthGoogleService } from '../services/oauth-google.service';
import { OauthGithubService } from '../services/oauth-github.service';


@Component({
    selector: 'app-login',
    standalone: true,
    template: `
      <h1>Log in to urlNinja</h1>
      <form>
          <input type="text"
          placeholder="Email"
          formControlName="email">
        <input
          type="password"
          placeholder="Password"
          formControlName="psw"
        />
        <a href="">Forgot your password?</a>
        <button type="submit">Log in</button>
      </form>
      <p><span>or continue with</span></p>
      <div id="login_oauth">
        <app-oauth-button-google (click)="loginGoogle()"></app-oauth-button-google>
        <app-oauth-button-github (click)="loginGithub()"></app-oauth-button-github>
      </div>
  `,
    styleUrl: './login.component.css',
    imports: [OauthButtonGithubComponent,OauthButtonGoogleComponent]
})
export class LoginComponent {
  constructor(
    private OauthGithubService: OauthGithubService,
    private OauthGoogleService: OauthGoogleService
  ) {}

  loginGoogle(){
    this.OauthGoogleService.login();
  }
  loginGithub(){
    this.OauthGithubService.initLoginGithub();
  }
}
