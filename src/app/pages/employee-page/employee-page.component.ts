import { Component, OnInit } from '@angular/core';
import { Employees } from '../../models/employees';
import { employees, projects } from '../../backendData';
import { Projects } from '../../models/projects';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  employeesData: Employees[] = employees;
  projectsData: Projects[] = projects;
  employee: Employees | undefined;
  projectsFiltered: any = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.employee = this.employeesData.find(
      (employee: Employees) => employee.id === idFromRoute
    );

    this.projectsData.forEach((project: any) => {
      if (project.id === this.employee?.projectId) {
        this.projectsFiltered.push(project);
      }
    });
  }
}
