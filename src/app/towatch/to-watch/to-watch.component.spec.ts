import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWatchComponent } from './to-watch.component';

describe('ToWatchComponent', () => {
  let component: ToWatchComponent;
  let fixture: ComponentFixture<ToWatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToWatchComponent]
    });
    fixture = TestBed.createComponent(ToWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
