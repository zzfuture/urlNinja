import { Component } from '@angular/core';
import { ProgressBarComponent } from "../../static_c/progress-bar/progress-bar.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-text-input',
    standalone: true,
    template: `
    <div class="form__group field">
        <input (keyup.enter)='sendLongUrl()' type="input" class="form__field" placeholder="Url" name="box" id='box' required />
        <label for="name" class="form__label">Url</label>
    </div>
    <app-progress-bar *ngIf="data !== ''"></app-progress-bar>
    <div *ngIf="showContenedor" class="contenedor">
      <a href="{{data}}" class="rectangulo" id="shortUrl">{{data}}</a>
    </div>
  `,
    styleUrl: './text-input.component.css',
    imports: [ProgressBarComponent, NgIf]
})
export class TextInputComponent {
  data: string = '';
  progressCompleted: boolean = false;
  showContenedor: boolean = false;

  async sendLongUrl() {
    const input = document.getElementById('box') as HTMLInputElement;
    let longUrl = input.value;
    // Define la URL larga aquí
    const response = await fetch('https://u.somee.com/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({ url: longUrl })
    });
    this.data = await response.json();
    console.log(this.data);
    this.progressCompleted = true; // Actualiza la variable cuando la barra de progreso haya terminado de cargar
    setTimeout(() => {
      this.showContenedor = true; // Muestra el contenedor después de 2 segundos
    }, 2000);
  }
}
