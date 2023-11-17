import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomardPage } from './homard.page';

describe('HomardPage', () => {
  let component: HomardPage;
  let fixture: ComponentFixture<HomardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
