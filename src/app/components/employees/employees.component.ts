import { Component, OnInit } from '@angular/core';
import { Employees } from '../../models/employees';
import { employees } from '../../backendData';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employeesData: Employees[] = employees;
  constructor() {}

  ngOnInit(): void {}
}
