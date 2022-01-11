import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EMPLOYEES } from '../../backendData';
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
    this.getProjectByProjectId();
  }

  getProjectByProjectId(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idFromRoute = String(routeParams.get('id'));

    this.projectsService.getProjectByProjectId(idFromRoute).subscribe(
      (data) => {
        this.showSpinner = false;
        this.project = data.project;
        this.employeesFiltered = data.employees;
      },
      (errror) => console.log('Error', errror)
    );
  }

  goToMain() {
    this.router.navigateByUrl('');
  }
}
