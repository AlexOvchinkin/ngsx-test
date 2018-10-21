import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDataConfirmComponent } from './page-data-confirm.component';

describe('PageDataConfirmComponent', () => {
  let component: PageDataConfirmComponent;
  let fixture: ComponentFixture<PageDataConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDataConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDataConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
