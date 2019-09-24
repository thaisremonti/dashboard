import { Component, OnInit } from '@angular/core';
import { EstadoService } from '../services/estado.service'
import { Estado } from '../model/estado.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {
  private estado: Estado = new Estado();
  estados: Observable<Estado>;


  constructor(
    private estadoService: EstadoService,
    private router: Router
    ) { }

  ngOnInit() {
    console.log("a")
    this.estados = this.estadoService.listaTodos();
    // this.estadoService.listaTodos()
    // .subscribe( data => {
    //   this.estado = data;
    // });
  }

  listaTodos() {
    // this.estados
    //   .subscribe(estado => {
    //     this.estado = new Estado();
    //     this.router.navigate(['listaTodos']);
    //   }, err => { console.error('erro ao listar todos os Alunos')});
  }

}
