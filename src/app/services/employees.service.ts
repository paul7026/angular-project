import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { EMPLOYEES } from '../backendData';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  getEmployeeById(id: number) {
    return EMPLOYEES.find((employee: Employee) => employee.userId === id);
  }
}
