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
    { headerName: 'User ID', field: 'id', flex: 1, minWidth: 170 },
    { headerName: 'Full Name', field: 'fullName', flex: 1, minWidth: 170 },
    { headerName: 'Position', field: 'position', flex: 1, minWidth: 170 },
    { headerName: 'City', field: 'city', flex: 1, minWidth: 170 },
    {
      headerName: 'Number of Projects',
      field: 'numberOfProjects',
      flex: 1,
      minWidth: 170,
    },
    {
      headerName: '',
      cellRendererFramework: EmployeesCellCustomComponent,
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
}
