import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DelabrisePage } from './delabrise.page';

describe('DelabrisePage', () => {
  let component: DelabrisePage;
  let fixture: ComponentFixture<DelabrisePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DelabrisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
