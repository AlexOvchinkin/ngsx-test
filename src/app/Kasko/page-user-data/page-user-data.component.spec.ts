import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserDataComponent } from './page-user-data.component';

describe('PageUserDataComponent', () => {
  let component: PageUserDataComponent;
  let fixture: ComponentFixture<PageUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
