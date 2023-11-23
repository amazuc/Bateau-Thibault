import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SommelierPage } from './sommelier.page';

describe('SommelierPage', () => {
  let component: SommelierPage;
  let fixture: ComponentFixture<SommelierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SommelierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
