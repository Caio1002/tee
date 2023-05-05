import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Pessoa } from 'src/app/class/Pessoa';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro-pessoa.page.html',
  styleUrls: ['./form-cadastro-pessoa.page.scss'],
})
export class FormCadastroPessoaPage implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(
    private nav: NavController, 
    
    private pessoaService: PessoaService
    ) {

  }

  ngOnInit() {

  }

  save(){
    this.pessoaService.save(this.pessoa)
    this.nav.navigateBack('pessoa')
  }

  back(){
    this.nav.back();
  }

}
