import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationProduitPage } from './information-produit.page';

describe('InformationProduitPage', () => {
  let component: InformationProduitPage;
  let fixture: ComponentFixture<InformationProduitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformationProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
