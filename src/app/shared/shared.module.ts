import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputboxComponent } from './components/inputbox/inputbox.component';
import { PagetitleComponent } from './components/pagetitle/pagetitle.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ButtonComponent, InputboxComponent, PagetitleComponent, CheckboxComponent, DrawerComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    MatGridListModule
  ],
  exports: [
    ButtonComponent, InputboxComponent, PagetitleComponent, CheckboxComponent, DrawerComponent
  ]
})
export class SharedModule { }
