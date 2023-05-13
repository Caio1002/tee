import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  pessoaUpdate = {
    name: '',
    idade: 0,
    sexo: ''
  }

  lista = []

  constructor(
    private pessoaService: PessoaService,
    private nav: NavController
  ) {

  }

  ngOnInit() {
    this.pessoa = this.pessoaService.loadPeople()
    this.pessoaUpdate = this.pessoaService.loadPeople()
    const aux:any = localStorage.getItem('Pessoa')
    this.lista = JSON.parse(aux)
    
  }

  save(){
    const item = this.pessoaUpdate
    var lista:any = this.lista.filter((el: any) => {
      if(el.idade == item.idade && el.name == item.name && el.sexo == item.sexo){
        el.name = this.pessoa.name
        el.idade = this.pessoa.idade
        el.sexo = this.pessoa.sexo
      }
      return el
    })
    const aux:any = JSON.stringify(lista)
    localStorage.setItem('Pessoa', aux)
    this.nav.navigateBack('pessoa')
  }

}