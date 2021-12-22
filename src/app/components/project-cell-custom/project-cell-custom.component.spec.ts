import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCellCustomComponent } from './project-cell-custom.component';

describe('ProjectCellCustomComponent', () => {
  let component: ProjectCellCustomComponent;
  let fixture: ComponentFixture<ProjectCellCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCellCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCellCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
