import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyurlsComponent } from './myurls/myurls.component';
import { NewurlComponent } from './newurl/newurl.component';
import { LinkManagementRoutingModule } from './link-management-routing.module';



@NgModule({
  declarations: [MyurlsComponent, NewurlComponent],
  imports: [
    CommonModule,
    LinkManagementRoutingModule
  ]
})
export class LinkManagementModule { }
