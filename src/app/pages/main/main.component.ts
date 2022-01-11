import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';
import { AllPostsGQL } from '../../services/projects.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  projectsData: Project[] = [];
  showSpinner: boolean = false;
  constructor(private projectsService: ProjectsService) {}
  ngOnInit() {
    this.showSpinner = true;
    this.getProjects();
  }
  getProjects(): void {
    this.projectsService.getProjects().subscribe((projects) => {
      this.showSpinner = false;
      this.projectsData = projects;
    });
  }
}
