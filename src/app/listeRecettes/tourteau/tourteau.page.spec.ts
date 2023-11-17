import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TourteauPage } from './tourteau.page';

describe('TourteauPage', () => {
  let component: TourteauPage;
  let fixture: ComponentFixture<TourteauPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TourteauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
