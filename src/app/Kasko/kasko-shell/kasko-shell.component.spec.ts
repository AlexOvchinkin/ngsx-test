import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaskoShellComponent } from './kasko-shell.component';

describe('KaskoShellComponent', () => {
  let component: KaskoShellComponent;
  let fixture: ComponentFixture<KaskoShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaskoShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaskoShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
