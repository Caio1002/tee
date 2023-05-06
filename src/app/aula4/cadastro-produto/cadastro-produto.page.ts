import { Component } from '@angular/core';
import { HttpServiceService } from 'src/services/http-service.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage  {

  constructor(
    private http: HttpServiceService
  ) { }

  ionViewWillEnter() {
    const prod = {marca:'nescau', categoria:'achocolatado', preco:10.99}
    this.http.cadastroProduto(prod).subscribe(resp => console.log(resp))
  }

}
