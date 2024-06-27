import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LivroComponent } from "./components/livro/livro.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, LivroComponent]
})
export class AppComponent {
  title = 'my-app';
}
