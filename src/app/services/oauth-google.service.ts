import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
@Injectable({
  providedIn: 'root'
})
export class OauthGoogleService {

  constructor(private oAuthService: OAuthService) {
    this.initLoginGoogle();
  }

  initLoginGoogle(){
    const config: AuthConfig = {
      issuer: 'https://accounts.google.com',
      strictDiscoveryDocumentValidation: false,
      clientId: '1006104321691-ftj7eo86vhvnst13jlm1cp3vjvhtlctp.apps.googleusercontent.com',
      redirectUri: window.location.origin + '/signin-google',
      scope: 'openid profile email',
    }
    this.oAuthService.configure(config);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
    console.log(window.location.origin)
  }

  login(){
    this.oAuthService.initLoginFlow();
  }
  logout(){
    this.oAuthService.logOut();
  }
  getProfile(){
    return this.oAuthService.getIdentityClaims();
  }
}
