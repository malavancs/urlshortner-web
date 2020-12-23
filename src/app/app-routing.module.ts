import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./session-management/session-management.module').then(m => m.SessionManagementModule)
  },
  {
    path: 'links',
    loadChildren: () => import('./link-management/link-management.module').then(m => m.LinkManagementModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
