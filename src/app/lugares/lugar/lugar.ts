import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from '../../categorias/categoria.service';
import { CategoriaModel } from '../../categorias/categoria.model';
import { LugarService } from '../lugar.service';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.html',
  styleUrl: './lugar.scss',
})
export class Lugar implements OnInit {
  camposForm: FormGroup;
  categoriasModel: CategoriaModel[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private service: LugarService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    // Carrega as categorias ao inicializar o componente
    this.categoriaService.obterTodas().subscribe({
      next: (listaCategorias) => (this.categoriasModel = listaCategorias),
      error: (err) => console.error('Erro ao obter categorias:', err),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();
    // Verifica se o formulário é válido antes de salvar
    if (this.camposForm.valid) {
      this.service.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log('Lugar salvo com sucesso:', lugar);
          this.camposForm.reset();
        },
        error: (err) => console.error('Erro ao salvar lugar:', err),
      });
    }
  }

  isCampoIvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return (campo?.invalid && campo.touched) || false;
  }
}
