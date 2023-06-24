import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./aula3/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./aula3/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'form-cadastro',
    loadChildren: () => import('./aula3/form-cadastro/form-cadastro.module').then( m => m.FormCadastroPageModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./aula3/lista-pessoa/lista-pessoa.module').then( m => m.ListaPessoaPageModule)
  },
  {
    path: 'agendamentos',
    loadChildren: () => import('./home/agendamentos/agendamentos.module').then( m => m.AgendamentosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./home/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'agend-consulta',
    loadChildren: () => import('./agend-consulta/agend-consulta.module').then( m => m.AgendConsultaPageModule)
  },
  {
    path: 'update-pessoa',
    loadChildren: () => import('./pages/update-pessoa/update-pessoa.module').then( m => m.UpdatePessoaPageModule)
  },
  {
    path: 'lista-produtos',
    loadChildren: () => import('./aula4/lista-produtos/lista-produtos.module').then( m => m.ListaProdutosPageModule)
  },
  {
    path: 'cadastro-produto',
    loadChildren: () => import('./aula4/cadastro-produto/cadastro-produto.module').then( m => m.CadastroProdutoPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./aula5/endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'api-test',
    loadChildren: () => import('./aula5/api-test/api-test.module').then( m => m.ApiTestPageModule)
  },
  {
    path: 'alert-sample',
    loadChildren: () => import('./capacitor/alert-sample/alert-sample.module').then( m => m.AlertSamplePageModule)
  },
  { //registra o modulo Auth na aplicação
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
