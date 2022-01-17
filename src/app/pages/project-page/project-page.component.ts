import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../../models/employee';
import { Project } from '../../models/project';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss'],
})
export class ProjectPageComponent implements OnInit, OnDestroy {
  project: Project | undefined;
  employeesFiltered: Employee[] = [];
  showSpinner: boolean = false;
  private projectByIdSubscription!: Subscription;

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

    this.projectByIdSubscription = this.projectsService
      .getProjectByProjectId(idFromRoute)
      .subscribe(
        (data) => {
          this.showSpinner = false;
          this.project = {
            id: data.id,
            name: data.name,
            numberOfEmploees: 3,
            description: data.description,
          };
          this.employeesFiltered = data.employees;
        },
        (errror) => console.log('Error', errror)
      );
  }

  goToMain() {
    this.router.navigateByUrl('');
  }

  ngOnDestroy(): void {
    this.projectByIdSubscription.unsubscribe();
  }
}
