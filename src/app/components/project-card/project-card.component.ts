import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/app/models/employees';
import { employees } from '../../backendData';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  employeeData: Employees[] = employees;

  constructor() {}

  ngOnInit(): void {}
}
