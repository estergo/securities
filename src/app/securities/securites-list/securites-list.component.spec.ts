import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritesListComponent } from './securites-list.component';

describe('SecuritesListComponent', () => {
  let component: SecuritesListComponent;
  let fixture: ComponentFixture<SecuritesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
