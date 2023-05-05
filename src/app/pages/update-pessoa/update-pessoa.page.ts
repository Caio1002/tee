import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-update-pessoa',
  templateUrl: './update-pessoa.page.html',
  styleUrls: ['./update-pessoa.page.scss'],
})
export class UpdatePessoaPage implements OnInit {
  pessoa = {
    name: '',
    idade: 0,
    sexo: ''
  }

  lista = []

  constructor(
    private pessoaService: PessoaService,
  ) {

  }

  ngOnInit() {
    this.pessoa = this.pessoaService.loadPeople()
    const aux:any = localStorage.getItem('Pessoa')
    this.lista = JSON.parse(aux)
  }

  save(){
    const item = this.pessoa
    var listaAux = this.lista.filter((el: any) => el == item)
    debugger
  }

}
