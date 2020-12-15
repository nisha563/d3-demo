import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiePageComponent } from './pie-page.component';

describe('PiePageComponent', () => {
  let component: PiePageComponent;
  let fixture: ComponentFixture<PiePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
