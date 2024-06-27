import { Component } from '@angular/core';

@Component({
  selector: 'app-capitulo',
  standalone: true,
  imports: [],
  templateUrl: './capitulo.component.html',
  styleUrl: './capitulo.component.css'
})
export class CapituloComponent {

capitulos = [
  {id: 0, numero: '1', titulo: 'Introdução:'},
  {id: 1, numero: '2', titulo: 'Desenvolvimento:'},
  {id: 2, numero: '3', titulo: 'Conclusão:'}
]
}
