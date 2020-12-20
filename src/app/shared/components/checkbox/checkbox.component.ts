import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Output() toggleChange: EventEmitter<MatSlideToggleChange> = new EventEmitter<MatSlideToggleChange>();
  constructor() { }

  ngOnInit() {
  }

  onToggleChange() {
    this.toggleChange.emit();
  }
}
