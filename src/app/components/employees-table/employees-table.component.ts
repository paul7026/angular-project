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
  domLayout: any;
  columnDefs: ColDef[] = [];
  defaultColDef: any;

  constructor() {
    this.columnDefs = [
      { headerName: 'User ID', field: 'userId', flex: 1, minWidth: 170 },
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

    this.defaultColDef = {
      sortable: true,
      filter: true,
      resizable: true,
    };
    this.domLayout = 'autoHeight';
  }
}

// constructor() {
//   this.columnDefs = [
//     {
//       headerName: 'Project number',
//       field: 'id',
//       flex: 1,
//       minWidth: 170,
//     },
//     {
//       headerName: 'Project Name',
//       field: 'name',
//       flex: 1,
//       minWidth: 170,
//     },
//     {
//       headerName: 'Number of Employees',
//       field: 'numberOfEmploees',
//       flex: 1,
//       minWidth: 170,
//     },
//     {
//       headerName: '',
//       cellRendererFramework: ProjectCellCustomComponent,
//       flex: 1,
//       minWidth: 170,
//     },
//   ];

//   this.defaultColDef = {
//     sortable: true,
//     filter: true,
//     resizable: true,
//   };
//   this.domLayout = 'autoHeight';
// }
