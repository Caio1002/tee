import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCadastroPageRoutingModule } from './form-cadastro-pessoa-routing.module';

import { FormCadastroPessoaPage } from './form-cadastro-pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCadastroPageRoutingModule
  ],
  declarations: [FormCadastroPessoaPage]
})
export class FormCadastroPageModule {}
