import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyurlsComponent } from './myurls/myurls.component';



const routes: Routes = [
  {
    path: 'myurls',
    component: MyurlsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkManagementRoutingModule { }
