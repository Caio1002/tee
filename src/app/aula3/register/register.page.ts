import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  public nome: string = '';
  public email: string = '';
  public senha: string = '';
  
  constructor(private nav: NavController) {
   }

  ngOnInit() {
  }

  back(){
    this.nav.navigateBack('welcome');
  }

  send(){
    
    const nome = this.nome;
    const email = this.email;
    const senha = this.senha;
    const data = {nome, email, senha}

    localStorage.setItem('pessoa', JSON.stringify(data))
  }

}
