import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { employees, projects } from '../../backendData';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  employeesData: Employee[] = employees;
  projectsData: Project[] = projects;
  project: Project | undefined;
  employeesFiltered: Employee[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = Number(routeParams.get('id'));

    this.project = this.projectsData.find(
      (project: Project) => project.id === projectIdFromRoute
    );

    this.employeesData.forEach((employee: Employee) => {
      if (employee.projectId === projectIdFromRoute) {
        this.employeesFiltered.push(employee);
      }
    });
  }
}
