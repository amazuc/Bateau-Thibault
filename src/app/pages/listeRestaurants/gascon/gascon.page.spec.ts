import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GasconPage } from './gascon.page';

describe('GasconPage', () => {
  let component: GasconPage;
  let fixture: ComponentFixture<GasconPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GasconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
