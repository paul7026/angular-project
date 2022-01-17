import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  projectsData: Project[] = [];
  showSpinner: boolean = false;
  loading!: boolean;
  private projectsSubscription!: Subscription;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.showSpinner = true;
    this.getProjects();
  }

  getProjects(): void {
    this.projectsSubscription = this.projectsService
      .getProjects()
      .subscribe((projects) => {
        this.showSpinner = false;
        this.projectsData = projects;
      });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }
}
