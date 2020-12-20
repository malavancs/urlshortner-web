import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss']
})
export class InputboxComponent implements OnInit {

  @Input() label: string;
  @Input() formControlName: string;
  constructor() { }

  ngOnInit() {
  }

}
