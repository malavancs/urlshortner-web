import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputbox',
  templateUrl: './inputbox.component.html',
  styleUrls: ['./inputbox.component.scss']
})
export class InputboxComponent implements OnInit {

  @Input() label: string;
  @Input() value: string;
  @Input() disabled: boolean;
  @Output() textChanged = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(event){
    this.textChanged.emit(event);
  }
}
