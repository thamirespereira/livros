import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  formularioPerfil = new FormGroup(
    {
      nomeCompleto: new FormControl('', [Validators.required, Validators.minLength(10)]),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      dataDeNascimento: new FormControl('', Validators.required)
    }
  )

  enviarFormulario(){
    alert("Formulário enviado com sucesso!");
  }
}
