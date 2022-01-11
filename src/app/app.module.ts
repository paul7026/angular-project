import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MainComponent } from './pages/main/main.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProjectCellCustomComponent } from './components/project-cell-custom/project-cell-custom.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesCellCustomComponent } from './components/employees-cell-custom/employees-cell-custom.component';

import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectsService } from './services/projects.service';
import { EmployeesService } from './services/employees.service';

import { HttpClientModule } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ProjectsTableComponent,
    MainComponent,
    ProjectCellCustomComponent,
    PageNotFoundComponent,
    EmployeesTableComponent,
    EmployeesCellCustomComponent,
    ProjectPageComponent,
    EmployeePageComponent,
    EmployeeCardComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [
    ProjectsService,
    EmployeesService,
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:1337/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
