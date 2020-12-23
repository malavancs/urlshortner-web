import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyurlsComponent } from './myurls/myurls.component';
import { NewurlComponent } from './newurl/newurl.component';
import { LinkManagementRoutingModule } from './link-management-routing.module';
import { SharedModule } from '../shared/shared.module';

import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [MyurlsComponent, NewurlComponent],
  imports: [
    CommonModule,
    LinkManagementRoutingModule,
    SharedModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class LinkManagementModule { }
