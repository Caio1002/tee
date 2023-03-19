import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  lista = [
    {nome: 'José', email: 'zeh@gmail.com', idade: 20},
    {nome: 'João', email: 'jao@gmail.com', idade: 32},
    {nome: 'Amanda', email: 'ama@gmail.com', idade: 21},
    {nome: 'Cleitu', email: 'cleitimReidelas@gmail.com', idade: 34},
    {nome: 'Paolo', email: 'paol@gmail.com', idade: 23},

  ] 


  ngOnInit() {
  }

}
