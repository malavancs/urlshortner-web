import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SignupComponent } from './signup/signup.component';
import { SessionRoutingModule } from './session-routing.module';
import { LoginComponent } from './login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    SessionRoutingModule,
    MatFormFieldModule,
    FormsModule
  ]
})
export class SessionManagementModule { }
