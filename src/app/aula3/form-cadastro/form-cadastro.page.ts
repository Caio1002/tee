import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.page.html',
  styleUrls: ['./form-cadastro.page.scss'],
})
export class FormCadastroPage implements OnInit {


  nome = ""
  idade = ""
  genero = ""
  lista = []

  constructor(private nav: NavController) { }

  ngOnInit() {
    const aux:any = localStorage.getItem('pacientes')
    this.lista = aux ? JSON.parse(aux) : [];
  }

  save(){
    const nome = this.nome;
    const idade = this.idade;
    const genero = this.genero;
    const obj:any = {nome, idade, genero}
    const data = JSON.stringify(this.lista.concat(obj))
    this.lista.concat(obj)
    localStorage.setItem('pacientes', data)
    this.nav.navigateBack('pessoa');
}

  back(){
    this.nav.back();
  }

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

}
