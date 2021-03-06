import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProcurarComponent } from './procurar/procurar.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { LoginComponent } from './login/login.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CadastrarProfissionalComponent } from './cadastrar-profissional/cadastrar-profissional.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'auth', component: LoginComponent },
  { path: 'procurar', component: ProcurarComponent, canActivate: [LoginGuard]}, 
  { path: 'procurar/perfil/:id', component: PerfilComponent, canActivate: [LoginGuard] },
      
  { path: 'login', component: LoginComponent},
  { path: 'cadastrar/cliente', component: CadastrarClienteComponent},
  { path: 'cadastrar/profissional', component: CadastrarProfissionalComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
