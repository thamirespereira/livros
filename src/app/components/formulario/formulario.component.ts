import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormField, MatInput, MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatInput,
    MatToolbar,
    MatFormField,
    MatButton,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
colunasDaTabela = ['nome', 'telefone', 'email', 'dataDeNascimento'];
dadosDaTabela = [
  {nome: '', telefone: '', email: '', dataDeNascimento: ''}
];
conteudoDaTabela = new MatTableDataSource(this.dadosDaTabela);

formularioCadastro = new FormGroup(
  {
    nome: new FormControl('', Validators.required),
    telefone: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    dataDeNascimento: new FormControl('', Validators.required)
  }
);

novoFormulario: any[] = [];

enviarFormulario(pessoa : any){
  this.novoFormulario = this.conteudoDaTabela.data.slice();
  this.novoFormulario.push({nome: pessoa.nome, telefone: pessoa.telefone, email: pessoa.email, dataDeNascimento: pessoa.dataDeNascimento});
  this.conteudoDaTabela.data = this.novoFormulario;
  alert("Formulário enviado com sucesso!");
}
}
