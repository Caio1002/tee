import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pessoa } from 'src/app/class/Pessoa';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.page.html',
  styleUrls: ['./form-cadastro.page.scss'],
})
export class FormCadastroPage implements OnInit {


  pessoa: Pessoa = new Pessoa();

  lista = []

  constructor(
    private nav: NavController, 
    
    private pessoaService: PessoaService
    ) {

  }

  ngOnInit() {
    const aux:any = localStorage.getItem('pacientes')
    this.lista = aux ? JSON.parse(aux) : [];
  }

  save(){
    this.pessoaService.save(this.pessoa)
    this.nav.navigateBack('pessoa')
  }

  back(){
    this.nav.back();
  }

  move(toPage: string): void {
    this.nav.navigateForward(toPage);
  }

}
