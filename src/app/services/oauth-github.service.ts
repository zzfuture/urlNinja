// import { Injectable } from '@angular/core';
// import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

// @Injectable({
//   providedIn: 'root'
// })
// export class OauthGithubService {

//   constructor(private oAuthService: OAuthService) {
//     this.initLoginGithub();
//   }

//   initLoginGithub(){
//     const config: AuthConfig = {
//       issuer: 'https://github.com/login/oauth/',
//       clientId: '4b9b1baf0b93cfc94c12',
//       dummyClientSecret: '8cb533f5109f72bfb215ccff570095b875ca750f',
//       redirectUri: 'https://github.com/login/oauth/access_token' + '4b9b1baf0b93cfc94c12',
//       scope: 'openid profile email',
//       requestAccessToken: true
//     }
//     this.oAuthService.configure(config);
//     this.oAuthService.setupAutomaticSilentRefresh();
//     this.oAuthService.loadDiscoveryDocumentAndTryLogin();
//     console.log(window.location.origin)
//   }

//   login(){
//     this.oAuthService.initLoginFlow();
//   }
//   logout(){
//     this.oAuthService.logOut();
//   }
//   getProfile(){
//     return this.oAuthService.getIdentityClaims();
//   }
// }






import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class OauthGithubService {
  initLoginGithub(){
    const client_id: string = '4b9b1baf0b93cfc94c12';
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + client_id)
  }
}
