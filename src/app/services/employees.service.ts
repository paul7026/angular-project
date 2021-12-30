import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { EMPLOYEES } from '../backendData';
import { PROJECTS } from '../backendData';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  getEmployeeById(
    id: string
  ): Observable<{ employee: Employee; projects: Project[] }> {
    const employee = EMPLOYEES.find((employee) => employee.id === id)!;
    const projects = PROJECTS.filter((project) => project.id === employee.id);
    const data = { employee: employee, projects: projects };
    return of(data);
  }
}
