import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  constructor(private apollo: Apollo) {}

  getEmployeeById(id: string): Observable<any> {
    const httpResp$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query EmployeeById {
            employee(id: "${id}") {
              id
              name
              city
              position
              projects {
                id
                name
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((result) => {
          return {
            id: result.data.employee.id,
            projectId: '3',
            fullName: result.data.employee.name,
            position: result.data.employee.position,
            city: result.data.employee.city,
            numberOfProjects: 3,
            projects: result.data.employee.projects,
          };
        })
      );
    return httpResp$;
  }
}
