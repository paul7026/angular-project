import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Project } from '../../models/project';
import { ProjectCellCustomComponent } from '../project-cell-custom/project-cell-custom.component';

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.scss'],
})
export class ProjectsTableComponent implements OnInit {
  @Input() projects: Project[] = [];

  columnDefs: ColDef[] = [
    {
      headerName: 'Project number',
      field: 'id',
      flex: 1,
      minWidth: 170,
    },
    {
      headerName: 'Project Name',
      field: 'name',
      flex: 1,
      minWidth: 170,
    },
    {
      headerName: 'Number of Employees',
      field: 'numberOfEmploees',
      flex: 1,
      minWidth: 170,
    },
    {
      headerName: '',
      cellRendererFramework: ProjectCellCustomComponent,
      flex: 1,
      minWidth: 170,
    },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };
  domLayout: string = 'autoHeight';

  ngOnInit(): void {}
}
