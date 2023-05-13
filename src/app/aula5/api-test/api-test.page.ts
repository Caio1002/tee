import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.page.html',
  styleUrls: ['./api-test.page.scss'],
})
export class ApiTestPage implements OnInit {

  user: any = {
    nome: '',
    genero: ''
  }

  constructor() { }

  ngOnInit() {
  }

  async activ(){
    const name = this.user.nome;
    const url = 'https://api.genderize.io?name=' + name;

    const response = await fetch(url);
    const prom = response.text();
    prom.then((x:any) => {
      x = JSON.parse(x);
      this.user.genero = x.gender
    })

  }

}
