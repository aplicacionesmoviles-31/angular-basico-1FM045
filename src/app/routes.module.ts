import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import  { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ], 
  exports: [RouterModule]
})
export class RoutesModule { }
