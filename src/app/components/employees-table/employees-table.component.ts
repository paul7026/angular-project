import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';
import { ColDef } from 'ag-grid-community';
import { EmployeesCellCustomComponent } from '../employees-cell-custom/employees-cell-custom.component';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent {
  @Input() employees: Employee[] = [];

  columnDefs: ColDef[] = [
    { headerName: 'Project id', field: 'projectId' },
    { headerName: 'Full Name', field: 'fullName' },
    { headerName: 'Position', field: 'position' },
    { headerName: 'City', field: 'city' },
    { headerName: 'Number of Projects', field: 'numberOfProjects' },
    {
      headerName: '',
      cellRendererFramework: EmployeesCellCustomComponent,
    },
  ];

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
