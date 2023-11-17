import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JacquesPage } from './jacques.page';

describe('JacquesPage', () => {
  let component: JacquesPage;
  let fixture: ComponentFixture<JacquesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JacquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
