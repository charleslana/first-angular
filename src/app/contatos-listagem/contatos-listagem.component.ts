import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  contatos = [
    {
      id: 1, 
      nome: 'Lista A'
    },
    {
      id: 2, 
      nome: 'Lista B'    
    },
    {
      id: 3, 
      nome: 'Lista C'    
    }
  ];

  nomeEmpresa: string;

  constructor() {
    this.nomeEmpresa = 'Una';
  }

  ngOnInit(): void {
  }

}
