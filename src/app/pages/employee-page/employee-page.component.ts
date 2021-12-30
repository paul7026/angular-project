import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
})
export class EmployeePageComponent implements OnInit {
  employee: Employee | undefined;
  projectsFiltered: Project[] = [];
  showSpinner: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    this.getEmployeeById();
  }

  getEmployeeById(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = String(routeParams.get('id'));
    this.employeesService.getEmployeeById(idFromRoute).subscribe((data) => {
      this.showSpinner = false;
      this.employee = data.employee;
      this.projectsFiltered = data.projects;
    });
  }

  goToMain(): void {
    this.router.navigateByUrl('/');
  }
}
