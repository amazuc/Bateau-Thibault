import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailProduitsPage } from './detail-produits.page';

describe('DetailProduitsPage', () => {
  let component: DetailProduitsPage;
  let fixture: ComponentFixture<DetailProduitsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailProduitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
