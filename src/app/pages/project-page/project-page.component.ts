import { Component, OnInit } from '@angular/core';
import { Employees } from '../../models/employees';
import { employees, projects } from '../../backendData';
import { Projects } from '../../models/projects';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  employeesData: Employees[] = employees;
  projectsData: Projects[] = projects;
  project: Projects | undefined;
  employeesFiltered: any = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = Number(routeParams.get('id'));

    this.project = this.projectsData.find(
      (project: Projects) => project.id === projectIdFromRoute
    );

    this.employeesData.forEach((employee: any) => {
      if (employee.projectId === projectIdFromRoute) {
        this.employeesFiltered.push(employee);
      }
    });
  }
}
