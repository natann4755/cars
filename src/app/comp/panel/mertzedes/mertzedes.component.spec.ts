import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MertzedesComponent } from './mertzedes.component';

describe('MertzedesComponent', () => {
  let component: MertzedesComponent;
  let fixture: ComponentFixture<MertzedesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MertzedesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MertzedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
