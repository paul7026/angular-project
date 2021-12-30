import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../backendData';
import { EMPLOYEES } from '../backendData';
import { delay, Observable, of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects;
  }

  getProjectByProjectId(
    id: string
  ): Observable<{ project: Project; employees: Employee[] }> {
    const project = PROJECTS.find((project) => project.id === id)!;
    const employees = EMPLOYEES.filter(
      (employee) => employee.projectId === +project.id
    );
    const data = { project: project, employees: employees };
    return of(data);
  }
}
