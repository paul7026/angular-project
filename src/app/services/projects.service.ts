import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { PROJECTS } from '../backendData';
import { EMPLOYEES } from '../backendData';
import { delay, Observable, of } from 'rxjs';
import { Employee } from '../models/employee';
import { Query, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class AllPostsGQL extends Query<Response> {
  override document = gql`
    query ProjectList {
      projects {
        name
        id
      }
    }
  `;
}

export class ProjectsService {
  getProjects(): Observable<Project[]> {
    const projects = of(PROJECTS);
    return projects.pipe(delay(1000));
  }

  getProjectByProjectId(
    id: string
  ): Observable<{ project: Project; employees: Employee[] }> {
    const project = PROJECTS.find((project) => project.id === id)!;
    const employees = EMPLOYEES.filter(
      (employee) => employee.projectId === +project.id
    );
    const data = { project: project, employees: employees };
    return of(data).pipe(delay(1000));
  }
}
