import { CategoriaService } from './../categoria.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-categoria',
  standalone: false,
  templateUrl: './categoria.html',
  styleUrl: './categoria.scss',
})
export class Categoria {
  camposForm: FormGroup;

  constructor(private service: CategoriaService) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      descricao: new FormControl('', Validators.required),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();
    if (this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: (categoria) => {
          console.log('Categoria salva com sucesso', categoria);
          this.camposForm.reset();
        },
        error: (erro) => console.error('Erro ao salvar categoria', erro),
      });
    }
  }

  isCampoIvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo.touched) || false;
  }
}
