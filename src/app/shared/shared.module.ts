import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { InputboxComponent } from './components/inputbox/inputbox.component';
import { PagetitleComponent } from './components/pagetitle/pagetitle.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';



@NgModule({
  declarations: [ButtonComponent, InputboxComponent, PagetitleComponent, CheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent, InputboxComponent, PagetitleComponent, CheckboxComponent
  ]
})
export class SharedModule { }
