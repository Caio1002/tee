import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePessoaPageRoutingModule } from './update-pessoa-routing.module';

import { UpdatePessoaPage } from './update-pessoa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePessoaPageRoutingModule
  ],
  declarations: [UpdatePessoaPage]
})
export class UpdatePessoaPageModule {}
