import { Component, OnInit } from '@angular/core';
import { projects } from '../../backendData';
import { Projects } from '../../models/projects';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss'],
})
export class EmployeeCardComponent implements OnInit {
  projectsData: Projects[] = projects;
  constructor() {}

  ngOnInit(): void {}
}
