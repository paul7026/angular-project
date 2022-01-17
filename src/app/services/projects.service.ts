import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

const GET_PROJECTS = gql`
  query ProjectsList {
    projects {
      name
      id
    }
  }
`;

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private apollo: Apollo) {}

  getProjects(): Observable<any> {
    const httpResp$ = this.apollo
      .watchQuery<any>({
        query: GET_PROJECTS,
      })
      .valueChanges.pipe(
        map((result) =>
          result.data.projects.map((result: any) => {
            return {
              id: result.id,
              name: result.name,
              numberOfEmploees: 3,
              description: 'Some description',
            };
          })
        )
      );
    return httpResp$;
  }

  getProjectByProjectId(id: string): Observable<any> {
    const httpResp$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query ProjectById {
            project(id: "${id}") {
              name
              id
              employees {
                id
                name
                position
              }
            }
          }
        `,
      })
      .valueChanges.pipe(
        map((result) => {
          console.log(result);
          return {
            id: result.data.project.id,
            name: result.data.project.name,
            numberOfEmploees: 3,
            description: 'Some desc',
            employees: result.data.project.employees.map((result: any) => {
              return {
                id: result.id,
                fullName: result.name,
                position: result.position,
                city: result.city,
                numberOfProjects: 3,
              };
            }),
          };
        })
      );

    return httpResp$;
  }
}
