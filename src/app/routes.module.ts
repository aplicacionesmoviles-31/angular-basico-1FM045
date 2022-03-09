import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import  { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TabsComponent } from './tabs/tabs.component';


import { PerfilModule } from './perfil/perfil.module';

const routes: Routes = [
  /*{ path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent }*/
  {
    path: 'perfil', 
    component: TabsComponent, 
    children: [
    {
      path: '', 
      loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)'../tabs/tabs.module' 
    
    }
  ]
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ], 
  exports: [RouterModule]
})
export class RoutesModule { }
