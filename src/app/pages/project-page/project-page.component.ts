import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EMPLOYEES } from '../../backendData';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit {
  employeesData: Employee[] = EMPLOYEES;
  project: any;
  employeesFiltered: Employee[] = [];
  showSpinner: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.getProjectByProjectId();
      this.showSpinner = false;
    }, 1000);
  }

  getProjectByProjectId(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = Number(routeParams.get('id'));

    this.projectsService.getProjectByProjectId(id).subscribe((data) => {
      this.project = data.project;
      this.employeesFiltered = data.employees;
    });
  }

  goToMain() {
    this.router.navigateByUrl('');
  }
}
