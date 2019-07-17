import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'lista', loadChildren: './lista/lista.module#ListaPageModule' },
  { path: 'novo-perfil', loadChildren: './novo-perfil/novo-perfil.module#NovoPerfilPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
