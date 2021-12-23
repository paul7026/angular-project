import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { ProjectsTableComponent } from './components/projects-table/projects-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MainComponent } from './pages/main/main.component';
import { AgGridModule } from 'ag-grid-angular';
import { ProjectCellCustomComponent } from './components/project-cell-custom/project-cell-custom.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesCellCustomComponent } from './components/employees-cell-custom/employees-cell-custom.component';

import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
