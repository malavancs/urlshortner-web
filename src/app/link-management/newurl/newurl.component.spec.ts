import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewurlComponent } from './newurl.component';

describe('NewurlComponent', () => {
  let component: NewurlComponent;
  let fixture: ComponentFixture<NewurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
