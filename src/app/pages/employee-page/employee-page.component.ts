import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { PROJECTS } from '../../backendData';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  employee: Employee | undefined;
  projectsFiltered: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));
    this.getEmployeeById();

    this.projectsFiltered = PROJECTS.filter(
      (project: Project) => project.id === this.employee?.projectId
    );
  }

  getEmployeeById(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.employee = this.employeesService.getEmployeeById(id);
  }

  goToMain(): void {
    this.router.navigateByUrl('/');
  }
}
