import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MyurlsComponent } from './myurls.component';

describe('MyurlsComponent', () => {
  let component: MyurlsComponent;
  let fixture: ComponentFixture<MyurlsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyurlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyurlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
