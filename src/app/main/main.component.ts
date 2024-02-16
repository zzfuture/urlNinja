import { Component } from '@angular/core';

import { GithubSvgComponent } from "../register/oauth-button/oauth-button-github/github-svg/github-svg.component";

import { HeaderComponent } from "../static_c/header/header.component";
import { FooterComponent } from "../static_c/footer/footer.component";
import { TextInputComponent } from "./text-input/text-input.component";

@Component({
    selector: 'app-main',
    standalone: true,
    imports: [GithubSvgComponent, HeaderComponent, FooterComponent, TextInputComponent],
    template: `
    <header>
      <app-header></app-header>
    </header>
    <div id="center">
      <h1>Open Source Fast Url Shortener</h1>
      <span id="emoji_">Fast ⚡   Relaible 🔒    Unlimited ♾️</span>
      <app-text-input></app-text-input>
    </div>
    <footer>
      <app-footer></app-footer>
    </footer>
    `,
    styles: `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
      :host {
        display: grid;
        height: 85vh;
        max-width: 1350px;
        margin: 50px auto 50px;
        grid-template-columns: 100%;
        grid-template-rows: auto 1fr auto;
        grid-template-areas:
          "header"
          "center"
          "footer";
      }
      span {
        color: #e4e4e4;
      }
      header {
        grid-area: header;
      }
      #center {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        grid-area: center;
        align-self: start;
        margin-top: 80px;

      }
      footer {
        grid-area: footer;
      }
      h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: #e4e4e4;
        font-size: 60px;
      }
      #emoji_ {
        font-weight: 600;
        font-size: 20px;
      }
    `
})
export class MainComponent {

}
