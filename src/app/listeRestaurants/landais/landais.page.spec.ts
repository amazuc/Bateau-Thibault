import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandaisPage } from './landais.page';

describe('LandaisPage', () => {
  let component: LandaisPage;
  let fixture: ComponentFixture<LandaisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
