import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Project } from '../../models/project';
import { ProjectCellCustomComponent } from '../project-cell-custom/project-cell-custom.component';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss'],
})
export class ProjectsTableComponent {
  @Input() projects: Project[] = [];
  columnDefs: ColDef[] = [
    {
      headerName: 'Project number',
      field: 'id',
    },
    {
      headerName: 'Project Name',
      field: 'name',
    },
    {
      headerName: 'Number of Employees',
      field: 'numberOfEmploees',
    },
    {
      headerName: '',
      cellRendererFramework: ProjectCellCustomComponent,
    },
  ];

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
