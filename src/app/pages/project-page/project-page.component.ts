import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EMPLOYEES } from '../../backendData';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  employeesData: Employee[] = EMPLOYEES;
  project: Project | undefined;
  employeesFiltered: Employee[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const projectIdFromRoute = Number(routeParams.get('id'));
    this.getProjectByProjectId();

    this.employeesFiltered = this.employeesData.filter(
      (employee: Employee) => employee.projectId === projectIdFromRoute
    );
  }

  getProjectByProjectId(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.project = this.projectsService.getProjectByProjectId(id);
  }

  goToMain() {
    this.router.navigateByUrl('');
  }
}
