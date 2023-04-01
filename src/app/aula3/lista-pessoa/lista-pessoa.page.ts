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

  sortString(a: string, b: string){
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    if(x<y){return -1;}
    if(x>y){return 1;}
    return 0;
  }

  ionViewWillEnter(){
    const aux:any = localStorage.getItem('pacientes')
    this.lista = JSON.parse(aux)
    this.lista.sort((a: any,b:any) => this.sortString(a.nome, b.nome));
    console.log('lista pacientes');
  }

  exibeCadastro(){
    localStorage.setItem('pessoa', 'criar');
    this.nav.navigateForward('form-cadastro');
  }

  detalhe(item: any){
    const aux = JSON.stringify(item);
    localStorage.setItem('pessoa', aux);
    console.log('origem');
    this.nav.navigateForward('detalhe-cadastro')
  }

  editar(item: any){
    const aux = JSON.stringify(item);
    localStorage.setItem('pacientes', aux);
    this.nav.navigateForward('form-cadastro-pessoa')

  }

  deletar(item: any){
    this.lista = this.lista.filter((el: any) => el != item)
    localStorage.setItem('pacientes', JSON.stringify(this.lista))
  }

  lista = [
    {nome: 'Ana Souza', idade: 19, genero: 'feminino'},
    {nome: 'Pedrovsky', idade: 20, genero: 'não binário'},
    {nome: 'Cleitin', idade: 34, genero: 'heteroTop'},
    {nome: 'Amanda', idade: 18, genero: 'feminino'},
    {nome: 'Vitoria', idade: 20, genero: 'feminino'}

  ]
}
