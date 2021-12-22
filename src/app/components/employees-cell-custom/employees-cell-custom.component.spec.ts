import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCellCustomComponent } from './employees-cell-custom.component';

describe('EmployeesCellCustomComponent', () => {
  let component: EmployeesCellCustomComponent;
  let fixture: ComponentFixture<EmployeesCellCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesCellCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesCellCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
