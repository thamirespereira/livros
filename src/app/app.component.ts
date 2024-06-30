import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LivroComponent } from "./components/livro/livro.component";
import { FormularioComponent } from "./components/formulario/formulario.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, LivroComponent, FormularioComponent, RouterLink]
})
export class AppComponent {
  title = 'my-app';
}
