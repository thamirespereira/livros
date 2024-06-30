import { Routes } from '@angular/router';
import { LivroComponent } from './components/livro/livro.component';
import { FormularioComponent } from './components/formulario/formulario.component';

export const routes: Routes = [
  {path: '', title: 'Página inicial', component: LivroComponent},
  {path: 'formulario', title: 'Formulário', component: FormularioComponent}
];
