import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <a id='madeby' href="https://www.linkedin.com/in/ikeracevedo24/">Made with ❤️ by Iker</a>
    <span></span>
    <!-- <a href="">Getting Started 🚀</a> -->
  `,
  styles: `
    #madeby {
      color: rgb(138, 138, 138);
      transition: 0.5s;
    }
    #madeby:hover {
      color: rgb(184, 184, 184);
    }
  `
})
export class FooterComponent {

}
