import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { employees, projects } from '../../backendData';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  employeesData: Employee[] = employees;
  projectsData: Project[] = projects;
  employee: Employee | undefined;
  projectsFiltered: Project[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.employee = this.employeesData.find(
      (employee: Employee) => employee.id === idFromRoute
    );

    this.projectsData.forEach((project: Project) => {
      if (project.id === this.employee?.projectId) {
        this.projectsFiltered.push(project);
      }
    });
  }
}
