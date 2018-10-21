import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCarDataComponent } from './page-car-data.component';

describe('PageCarDataComponent', () => {
  let component: PageCarDataComponent;
  let fixture: ComponentFixture<PageCarDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCarDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCarDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
