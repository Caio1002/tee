import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-pessoa',
  templateUrl: './lista-pessoa.page.html',
  styleUrls: ['./lista-pessoa.page.scss'],
})
export class ListaPessoaPage implements OnInit {

  constructor(private nav: NavController) {
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    const aux:any = localStorage.getItem('pacientes')
    this.lista = JSON.parse(aux)
  }

  exibeCadastro(){
    this.nav.navigateForward('form-cadastro')
  }

  lista = [
    {nome: 'Ana Souza', idade: 19, genero: 'feminino'},
    {nome: 'Pedrovsky', idade: 20, genero: 'não binário'},
    {nome: 'Cleitin', idade: 34, genero: 'heteroTop'},
    {nome: 'Amanda', idade: 18, genero: 'feminino'},
    {nome: 'Vitoria', idade: 20, genero: 'feminino'}

  ]
}
