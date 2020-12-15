import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterPageComponent } from './scatter-page.component';

describe('ScatterPageComponent', () => {
  let component: ScatterPageComponent;
  let fixture: ComponentFixture<ScatterPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScatterPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
