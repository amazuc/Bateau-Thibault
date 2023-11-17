import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FousPage } from './fous.page';

describe('FousPage', () => {
  let component: FousPage;
  let fixture: ComponentFixture<FousPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
