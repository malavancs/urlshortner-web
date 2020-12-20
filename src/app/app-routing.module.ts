import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./session-management/session-management.module').then(m => m.SessionManagementModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./link-management/link-management.module').then(m => m.LinkManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
