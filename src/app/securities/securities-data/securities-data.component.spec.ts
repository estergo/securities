import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritiesDataComponent } from './securities-data.component';

describe('SecuritiesDataComponent', () => {
  let component: SecuritiesDataComponent;
  let fixture: ComponentFixture<SecuritiesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecuritiesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuritiesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
