import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
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
  showSpinner: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeesService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.getEmployeeById();
      this.showSpinner = false;
    }, 1000);
  }

  getEmployeeById(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));
    this.employeesService.getEmployeeById(id).subscribe((data) => {
      this.employee = data.employee;
      this.projectsFiltered = data.projects;
    });
  }

  goToMain(): void {
    this.router.navigateByUrl('/');
  }
}
