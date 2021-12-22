import { Component, OnInit, Input } from '@angular/core';
import { Employees } from '../../models/employees';
import { ColDef } from 'ag-grid-community';
import { EmployeesCellCustomComponent } from '../employees-cell-custom/employees-cell-custom.component';
import { employees } from 'src/app/backendData';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss'],
})
export class EmployeesTableComponent implements OnInit {
  @Input() employees!: Employees[];
  employeesFiltered: Employees[] = [];

  columnDefs: ColDef[] = [
    { headerName: 'Project number', field: 'projectId' },
    { headerName: 'Full Name', field: 'fullName' },
    { headerName: 'Position', field: 'position' },
    { headerName: 'City', field: 'city' },
    { headerName: 'Number of Projects', field: 'numberOfProjects' },
    {
      headerName: '',
      cellRendererFramework: EmployeesCellCustomComponent,
    },
  ];

  rowData: Employees[] = [];

  constructor() {}

  ngOnInit(): void {}
  onGridReady(params: any) {
    this.employees.forEach((emloyee) => {
      // поменяю когда буду получать id из routing
      if (emloyee.projectId === 1) {
        this.employeesFiltered.push(emloyee);
      }
    });
    this.rowData = this.employeesFiltered;
    params.api.sizeColumnsToFit();
  }
}
