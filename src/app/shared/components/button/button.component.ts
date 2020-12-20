import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {



  @Input() text;
  @Input() icon;
  @Input() isRounded;

  @Output() press = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.press.emit(event);
  }

}
