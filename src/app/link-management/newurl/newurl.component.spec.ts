import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewurlComponent } from './newurl.component';

describe('NewurlComponent', () => {
  let component: NewurlComponent;
  let fixture: ComponentFixture<NewurlComponent>;

  beforeEach(waitForAsync(() => {
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
