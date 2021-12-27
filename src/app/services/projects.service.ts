import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../backendData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }

  getProjectByProjectId(id: number) {
    return PROJECTS.find((project: Project) => project.id === id);
  }
}
