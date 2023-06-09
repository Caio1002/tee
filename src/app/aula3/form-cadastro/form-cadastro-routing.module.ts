import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCadastroPage } from './form-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: FormCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCadastroPageRoutingModule {}
