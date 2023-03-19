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
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'teste',
    loadChildren: () => import('./teste/teste/teste.module').then( m => m.TestePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./aula2/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./aula2/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'form-cadastro',
    loadChildren: () => import('./aula3/form-cadastro/form-cadastro.module').then( m => m.FormCadastroPageModule)
  },
  {
    path: 'pessoa',
    loadChildren: () => import('./aula3/lista-pessoa/lista-pessoa.module').then( m => m.ListaPessoaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
