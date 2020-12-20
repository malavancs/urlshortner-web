import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SessionManagementModule } from './session-management/session-management.module';
import { LinkManagementModule } from './link-management/link-management.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    SessionManagementModule,
    LinkManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
