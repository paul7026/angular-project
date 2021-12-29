import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { EMPLOYEES } from '../backendData';
import { PROJECTS } from '../backendData';
import { Observable, of } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  getEmployeeById(
    id: number
  ): Observable<{ employee: Employee; projects: Project[] }> {
    const employee = EMPLOYEES.find((employee) => employee.id === id)!;
    const projects = PROJECTS.filter(
      (project) => project.id === employee.projectId
    );
    const data = { employee: employee, projects: projects };
    return of(data);
  }
}
