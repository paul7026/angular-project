import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  projectsData: Project[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectsService
      .getProjects()
      .subscribe((projects) => (this.projectsData = projects));
  }
}
