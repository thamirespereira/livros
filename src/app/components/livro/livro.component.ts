import { CapituloComponent } from './../capitulo/capitulo.component';
import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
    selector: 'app-livro',
    standalone: true,
    templateUrl: './livro.component.html',
    styleUrl: './livro.component.css',
    imports: [CapituloComponent, MatCardModule]
})
export class LivroComponent {
  @Input() CapituloComponent = '';
livros = [
  {id: 0, titulo: 'Castelo animado', autor: 'Diana Wynne Jones'},
  {id: 1, titulo: 'Morte na praia', autor: 'Agatha Christie'},
  {id: 2, titulo: 'A menina submersa', autor: 'Caitlín R. Kiernan'}
]
}
