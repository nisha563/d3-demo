import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainbowPageComponent } from './rainbow-page.component';

describe('RainbowPageComponent', () => {
  let component: RainbowPageComponent;
  let fixture: ComponentFixture<RainbowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainbowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainbowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
