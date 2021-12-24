import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { employees, projects } from '../../backendData';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  employee: Employee | undefined;
  projectsFiltered: Project[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParams.get('id'));

    this.employee = employees.find(
      (employee: Employee) => employee.userId === idFromRoute
    );

    this.projectsFiltered = projects.filter(
      (project: Project) => project.id === this.employee?.projectId
    );
  }

  goToMain() {
    this.router.navigateByUrl('/');
  }
}
